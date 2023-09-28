import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as EventsStore from '../store/Events';

// At runtime, Redux will merge together...
type EventProps =
    EventsStore.EventState // ... state we've requested from the Redux store
    & typeof EventsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>; // ... plus incoming routing parameters


class EventData extends React.PureComponent<EventProps> {
    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Event Info</h1>
                <p>The information below explains what event happened, some details and time.</p>
                {this.renderForecastsTable()}
                {this.renderPagination()}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestEvents(startDateIndex);
    }

    private renderForecastsTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Event Name</th>
                        <th>Notes</th>
                        <th>Occurance Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.events.map((event: EventsStore.Event) =>
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.eventName}</td>
                            <td>{event.notes}</td>
                            <td>{event.dateCreated.toLocaleString()}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    private renderPagination() {
        const prevStartDateIndex = (this.props.startDateIndex || 0) - 5;
        const nextStartDateIndex = (this.props.startDateIndex || 0) + 5;

        return (
            <div className="d-flex justify-content-between">
                <Link className='btn btn-outline-secondary btn-sm' to={`/events/${prevStartDateIndex}`}>Previous</Link>
                {this.props.isLoading && <span>Loading...</span>}
                <Link className='btn btn-outline-secondary btn-sm' to={`/events/${nextStartDateIndex}`}>Next</Link>
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.events, // Selects which state properties are merged into the component's props
    EventsStore.actionCreators // Selects which action creators are merged into the component's props
)(EventData as any);

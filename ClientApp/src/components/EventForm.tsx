import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as FormStore from '../store/Form';

type FormProps =
    FormStore.FormState &
    typeof FormStore.actionCreators &
    RouteComponentProps<{}>;

class EventForm extends React.PureComponent<FormProps> {
    public render() {

        return (
            <React.Fragment>
                <div className="container">
                    <form action="/EventData/Create" method="post">
                        <div asp-validation-summary="ModelOnly"></div>

                        <div>
                            <label id="EventName">What occured (Vomiting, Diarrhea, Nausea)
                        </label>
                            <input required className="form-control" type="textbox" id="EventName" name="EventName" />
                            <span asp-validation-for="EventTypeId"></span>
                        </div>
                        <div>
                            <label>
                                Notes
                    </label>
                            <span asp-validation-for="Notes"></span>
                            <textarea required className="form-control" id="Notes" name="Notes"></textarea>
                        </div>
                        <div>
                            <label htmlFor="DateCreated">Please select a date and time.</label>
                            <label>Time of Occurance</label>
                            <input required className="form-control" type="datetime-local" id="DateCreated"
                                name="DateCreated" min="1970-01-01T00:00" max="3019-01-01T00:00"
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" />
                        </div>
                        <div>
                            <input type="submit" value="Create" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.events,
    FormStore.actionCreators
)(EventForm);

import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface EventState {
    isLoading: boolean;
    startDateIndex?: number;
    events: Event[];
}

export interface Event {
    id: number;
    eventName: string;
    notes: string;
    dateCreated: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestEventAction {
    type: 'REQUEST_EVENTS';
    startDateIndex: number;
}

interface ReceiveEventAction {
    type: 'RECEIVE_EVENTS';
    startDateIndex: number;
    events: Event[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestEventAction | ReceiveEventAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestEvents: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.events && startDateIndex !== appState.events.startDateIndex) {
            fetch('event')
                .then(response => response.json() as Promise<Event[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_EVENTS', startDateIndex: startDateIndex, events: data });
                });

            dispatch({ type: 'REQUEST_EVENTS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: EventState = { events: [], isLoading: false };

export const reducer: Reducer<EventState> = (state: EventState | undefined, incomingAction: Action): EventState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_EVENTS':
            return {
                startDateIndex: action.startDateIndex,
                events: state.events,
                isLoading: true
            };
        case 'RECEIVE_EVENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    events: action.events,
                    isLoading: false
                };
            }
            break;
    }

    return state;
};

import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface FormState {
    name: string;
    dateCreated: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.
export interface FormAction { type: 'SUBMIT' }
//export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
//export interface DecrementCountAction { type: 'DECREMENT_COUNT' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
//export type KnownAction = IncrementCountAction | DecrementCountAction;
export type KnownAction = FormAction;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    submit: () => ({ type: 'SUBMIT' } as FormAction)
    //increment: () => ({ type: 'INCREMENT_COUNT' } as IncrementCountAction),
    //decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<FormState> = (state: FormState | undefined, incomingAction: Action): FormState => {
    if (state === undefined) {
        return { name: "", dateCreated:"2021-01-01t:12:00"};
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SUBMIT':
            return { name:state.name, dateCreated:state.dateCreated.toString() };
        default:
            return state;
    }
};

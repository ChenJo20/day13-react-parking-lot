const ACTIONS = {
    INIT: 'init'
};

export const parkingLotsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INIT:
            console.log("payload", action.payload)
            return action.payload
        default:
            return state;
    }
};

export const ACTIONS_MAP = ACTIONS;
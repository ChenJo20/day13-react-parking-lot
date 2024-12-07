const ACTIONS = {
    INIT: 'INIT',
    PARK: 'PARK'
};

export const parkingLotsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INIT:
            console.log("payload", action.payload)
            return action.payload
        case ACTIONS_MAP.PARK:
            return state.map(lot => {
                    if (lot.id === action.payload.parkingLot) {
                        return {
                            ...lot,
                            tickets: lot.tickets.map(ticket => {
                                if (ticket.position === action.payload.position) {
                                    return {...ticket, plateNumber: action.payload.plateNumber};
                                }
                                return ticket;
                            })
                        };
                    }
                    return lot;
                })
            ;
        default:
            return state;
    }
};

export const ACTIONS_MAP = ACTIONS;
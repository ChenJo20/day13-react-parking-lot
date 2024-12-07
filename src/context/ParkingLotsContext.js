const ACTIONS = {
    INIT: 'INIT',
    PARK: 'PARK',
    FETCH: 'FETCH'
};

export const parkingLotsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INIT:
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
            });
        case ACTIONS_MAP.FETCH:
            return state.map(lot => {
                const ticket = lot.tickets.find(ticket => ticket.plateNumber === action.payload.plateNumber);
                if (ticket) {
                    return {
                        ...lot,
                        tickets: lot.tickets.map(t => {
                            if (t.position === ticket.position) {
                                return {...t, plateNumber: ""};
                            }
                            return t;
                        })
                    };
                }
                return lot;
            });
        default:
            return state;
    }
};

export const ACTIONS_MAP = ACTIONS;
import React, { createContext, useReducer, useContext } from 'react';
import parkingLotsData from '../data/ParkingLotsWithTickets.json';

const ParkingLotsContext = createContext();

const parkingLotsReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const ParkingLotsProvider = ({ children }) => {
    const [state] = useReducer(parkingLotsReducer, parkingLotsData);
    return (
        <ParkingLotsContext.Provider value={state}>
            {children}
        </ParkingLotsContext.Provider>
    );
};

export const useParkingLots = () => useContext(ParkingLotsContext);
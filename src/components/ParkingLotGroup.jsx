import React from 'react';
import {useParkingLots} from '../context/ParkingLotsContext';
import './css/ParkingLotGroup.css';
import ParkingLot from "./ParkingLot";

const ParkingLotGroup = () => {
    const parkingLotsWithTickets = useParkingLots();

    return (
        <div className="parking-lot-group">
            {parkingLotsWithTickets.map((lot, _) => (
                <div key={lot.id} className="parking-lot-wrapper">
                    <h2>{lot.name}</h2>
                    <ParkingLot lot={lot}/>
                </div>
            ))}
        </div>
    );
};

export default ParkingLotGroup;
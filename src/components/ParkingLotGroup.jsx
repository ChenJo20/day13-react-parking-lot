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
                    <ParkingLot lot={lot}/>
                    <h2 className="parking-lot-name">{lot.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default ParkingLotGroup;
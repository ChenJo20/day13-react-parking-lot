import React from 'react';
import './css/ParkingLot.css';

const ParkingLot = ({ lot }) => {
    const rows = [];
    const tickets = lot.tickets;

    for (let i = 0; i < tickets.length; i += 3) {
        rows.push(tickets.slice(i, i + 3));
    }

    return (
        <div className="parking-lot">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="parking-lot-row">
                    {row.map((ticket) => (
                        <div key={ticket.position} className="parking-lot-cell">
                            {ticket.plateNumber}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ParkingLot;
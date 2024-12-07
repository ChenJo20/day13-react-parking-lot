import React, {useContext, useEffect, useState} from 'react';
import {ACTIONS_MAP} from '../context/ParkingLotsContext';
import './css/ParkingLotGroup.css';
import ParkingLot from "./ParkingLot";
import {getParkingLotsWithTickets} from "../api/parkinglot";
import {ParkingLotContext} from "../App";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const ParkingLotGroup = () => {
    const {state , dispatch} = useContext(ParkingLotContext);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        getParkingLotsWithTickets()
            .then((parkingLots) => {
                dispatch({type: ACTIONS_MAP.INIT, payload: parkingLots})
            })
            .finally(
                setLoading(false)
            )
    }, []);

    useEffect(() => {
        if (state.length > 0) {
            setLoading(false);
        }
    }, [state]);

    return (
        <div className="parking-lot-group">
            {loading && state.length === 0
                ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48, marginTop: "50px"}} spin />} />
                : state.map((lot) => (
                <div key={lot.id} className="parking-lot-wrapper">
                    <ParkingLot lot={lot} />
                    <h2 className="parking-lot-name">{lot.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default ParkingLotGroup;
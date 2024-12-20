// Add this new component in a new file named ParkingControl.jsx
import React, {useContext, useState} from 'react';
import {Alert, Button, Input, Modal, Select} from 'antd';
import './css/ParkingControl.css';
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {ParkingLotContext} from "../App";
import {ACTIONS_MAP} from "../context/ParkingLotsContext";
import {fetchCar, parkCar} from "../api/parkinglot";

const {Option} = Select;

const ParkingControl = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [parkingBoyType, setParkingBoyType] = useState('Standard');
    const [isValidPlateNumber, setIsValidPlateNumber] = useState(null);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState(null);
    const {dispatch} = useContext(ParkingLotContext);

    const validatePlateNumber = (e) => {
        const plateNumberPattern = /^[A-Z]{2}-\d{4}$/;
        const isValid = plateNumberPattern.test(e.target.value);
        setIsValidPlateNumber(isValid);
        setPlateNumber(e.target.value);
    };

    const handlePark = async () => {
        if (isValidPlateNumber) {
            try {
                const ticket = await parkCar(plateNumber, parkingBoyType);
                dispatch({type: ACTIONS_MAP.PARK, payload: ticket});
                setError(null);
            } catch (error) {
                setError(error.response.data);
            }
        }
    };

    const handleFetch = async () => {
        if (isValidPlateNumber) {
            try {
                const data = await fetchCar(plateNumber);
                setModalData(data);
                setModalVisible(true);
                console.log(data)
                dispatch({type: ACTIONS_MAP.FETCH, payload: data.car});
                setError(null);
            } catch (error) {
                setError(error.response.data);
            }
        }
    };

    return (
        <div className="parking-control">
            <label htmlFor="plateNumber" className="plate-number-label">Plate Number:</label>

            <div className="input-container">
                <Input
                    id="plateNumber"
                    className="plate-number-input"
                    placeholder="XX-YYYY"
                    value={plateNumber}
                    onChange={validatePlateNumber}
                />
                {isValidPlateNumber === false && (
                    <div className="error-message">
                        <CloseCircleOutlined/> 输入的车牌号不满足格式要求
                    </div>
                )}
                {isValidPlateNumber === true && (
                    <div className="success-message">
                        <CheckCircleOutlined/>
                    </div>
                )}
            </div>

            <Select
                defaultValue="Standard"
                className="parking-boy-type-select"
                onChange={setParkingBoyType}
            >
                <Option value="Standard">Standard</Option>
                <Option value="Smart">Smart</Option>
                <Option value="SuperSmart">SuperSmart</Option>
            </Select>
            <Button type="primary" className="park-button" onClick={handlePark}>Park</Button>
            <Button type="primary" className="fetch-button" onClick={handleFetch}>Fetch</Button>
            {error && <Alert message={error} type="error" showIcon/>}
            <Modal
                title="Fetch Car Details"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={[
                    <Button key="close" onClick={() => setModalVisible(false)}>
                        Close
                    </Button>,
                ]}
            >
                {modalData && (
                    <div>
                        <p><strong>Entry Time:</strong> {modalData.parkDate}</p>
                        <p><strong>Exit Time:</strong> {modalData.fetchTime}</p>
                        <p><strong>Duration:</strong> {modalData.hours} hour {modalData.minutes} minute</p>
                        <p><strong>Fee:</strong> {modalData.fee}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ParkingControl;
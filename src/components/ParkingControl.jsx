// Add this new component in a new file named ParkingControl.jsx
import React, { useState } from 'react';
import { Input, Select, Button } from 'antd';
import './css/ParkingControl.css';
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";

const { Option } = Select;

const ParkingControl = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [parkingBoyType, setParkingBoyType] = useState('Standard');

    const [isValidPlateNumber, setIsValidPlateNumber] = useState(null);

    const validatePlateNumber = (e) => {
        const plateNumberPattern = /^[A-Z]{2}-\d{4}$/;
        const isValid = plateNumberPattern.test(e.target.value);
        setIsValidPlateNumber(isValid);
        setPlateNumber(e.target.value);
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
            <Button type="primary" className="park-button">Park</Button>
            <Button type="primary" className="fetch-button">Fetch</Button>
        </div>
    );
};

export default ParkingControl;
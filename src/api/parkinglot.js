import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000
})

export const getParkingLotsWithTickets = async () => {
    const response = await instance.get("/parking-lots");
    return response.data
}

export const parkCar = async (plateNumber, parkingBoy) => {
    const response = await instance.post("/parking-lots/park", {
        plateNumber,
        parkingBoy
    });
    return response.data;
};

export const fetchCar = async (plateNumber) => {
    const response = await instance.post("/parking-lots/fetch", { plateNumber });
    return response.data;
};
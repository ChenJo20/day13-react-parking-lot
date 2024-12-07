import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000
})

export const getParkingLotsWithTickets = async () => {
    const response = await instance.get("/parking-lots");
    return response.data
}

export const addTodo = async (text) => {
    const response = await instance.post("/todos", {
        text: text,
        done: false
    })
    return response.data
}
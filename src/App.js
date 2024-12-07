import './App.css';
import {parkingLotsReducer} from "./context/ParkingLotsContext";
import ParkingLotGroup from "./components/ParkingLotGroup";
import ParkingControl from "./components/ParkingControl";
import {createContext, useReducer} from "react";

export const ParkingLotContext = createContext();

function App() {
    const [state, dispatch] = useReducer(parkingLotsReducer, []);
    return (
        <div className="App">
            <ParkingLotContext.Provider value={{state, dispatch}}>
                <ParkingControl/>
                <ParkingLotGroup/>
            </ParkingLotContext.Provider>
        </div>
    );
}

export default App;

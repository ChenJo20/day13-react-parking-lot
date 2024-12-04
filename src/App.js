import './App.css';
import {ParkingLotsProvider} from "./context/ParkingLotsContext";
import ParkingLotGroup from "./components/ParkingLotGroup";

function App() {

    return (
        <div className="App">
            <ParkingLotsProvider>
                <ParkingLotGroup />
            </ParkingLotsProvider>
        </div>
    );
}

export default App;

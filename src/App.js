import './App.css';
import {ParkingLotsProvider} from "./context/ParkingLotsContext";
import ParkingLotGroup from "./components/ParkingLotGroup";
import ParkingControl from "./components/ParkingControl";

function App() {

    return (
        <div className="App">
            <ParkingLotsProvider>
                <ParkingControl />
                <ParkingLotGroup />
            </ParkingLotsProvider>
        </div>
    );
}

export default App;

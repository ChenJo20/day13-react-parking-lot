"# day13-react-parking-lot"
u are developing the UI for a parking lot management system,now you need to show the parking lot detail.Here are the component design. useContext and useReducer to help manage global state parkingLotsWithTickets, the state you will load from a json file named ParkingLotsWithTickets 1.ParkingLotGroup, in this component, you need to get parkingLotsWithTickets, the state will be a list with 3 items, for each item in the list, you will render a component named ParkingLot. The items will be displayed in one row, The component have a margin of 10px, and will be wrapped by a shadow box. Please give the file structure of your design
the parkinglot item in ParkingLotsWithTickets.json should be alike { "id": 1, "name": "The Plaza", "tickets": [{"position": 1, "plateNumber": "AA-1234", "parkingLot":1}]}, this is an example, actually there will be 3 parking lots, first has 9 tickets, second 12, third alse 9
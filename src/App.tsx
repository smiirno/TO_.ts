import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Dispatch} from "react";
import {addCar, removeCar} from "./Store/actionCreators";
import AddCarForm from "./Components/AddCarForm";
import NavbarComponent from "./Components/Navbar";
import CarList from "./Components/CarList";

const App: React.FC = () => {

    const activeList:ICar[] = []
    const inactiveList:ICar[] = []

    const cars: ICar[] = useSelector(
        (state: CarState) => state.cars,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveCar = React.useCallback(
        (car: ICar) => dispatch(addCar(car)),
        [dispatch]
    )

    cars.map((car) => {
        if (car.isActive) {
            activeList.push(car)
        } else {
            inactiveList.push(car)
        }
    })

    return (
        <div>
            <NavbarComponent />
            <div className='container'>
                <Router>
                    <div>
                        <Route exact path="/">
                            <CarList Cars={activeList} Title='Предстоящие ТО' removeCar={removeCar}/>
                            <AddCarForm saveCar={saveCar}/>
                        </Route>
                        <Route path="/inactive">
                            <CarList Cars={inactiveList} Title='Выполненные ТО'removeCar={removeCar}/>
                        </Route>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default App;

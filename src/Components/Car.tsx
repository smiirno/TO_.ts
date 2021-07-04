import React from "react";
import {Dispatch} from "react";
import {useDispatch} from "react-redux";
import {moveToInactive, removeCar} from "../Store/actionCreators";

type CarProps = {
    Cars: ICar[]
    car: ICar
    removeCar: (car: ICar) => void
    moveToInactive: (car: ICar) => void
}

export const Car: React.FC<CarProps> = (props) => {

    const dispatch: Dispatch<any> = useDispatch()

    const deleteCar = React.useCallback(
        (car: ICar) => dispatch(removeCar(car)),
        [dispatch, removeCar]
    )

    const moveCar = React.useCallback(
        (car: ICar) => dispatch(moveToInactive(car)),
        [dispatch, moveToInactive]
    )

    return(
        <React.Fragment>
            <tr>
                <td>{props.Cars.indexOf(props.car) + 1}</td>
                <td>{props.car.brand} {props.car.model}</td>
                <td>{props.car.carNumber}</td>
                <td>{props.car.date}</td>
                <td>
                    <button onClick={() => deleteCar(props.car)} className='btn btn-sm btn-outline-secondary'>Удалить</button>
                    <button onClick={() => moveCar(props.car)} className='btn btn-sm btn-outline-secondary'>Выполнено</button>
                </td>
            </tr>
        </React.Fragment>
    )
}

export default Car
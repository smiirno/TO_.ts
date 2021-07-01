import React, {Dispatch} from "react";
import {useDispatch} from "react-redux";
import {removeCar} from "../Store/actionCreators";

type CarListProps = {
    Cars: ICar[]
    Title: string
    removeCar: (car: ICar) => void
}

const CarList: React.FC<CarListProps> = (props) => {

    const dispatch: Dispatch<any> = useDispatch()

    const deleteCar = React.useCallback(
        (car: ICar) => dispatch(removeCar(car)),
        [dispatch, removeCar]
    )

    return (
        <div>
            <div style={{marginTop: 70}}>
                <div style={{marginBottom: 20}}>
                    <h3>{props.Title}</h3>
                </div>

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Автомобиль</th>
                        <th scope="col">Гос. номер</th>
                        <th scope="col">Дата записи</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.Cars.map((car) => {
                        return(
                            <React.Fragment>
                                <tr>
                                    <td>{props.Cars.indexOf(car) + 1}</td>
                                    <td>{car.brand} {car.model}</td>
                                    <td>{car.carNumber}</td>
                                    <td>{car.date}</td>
                                    <td>
                                        <button onClick={() => deleteCar(car)} className='btn btn-sm btn-outline-secondary'>Удалить</button>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CarList
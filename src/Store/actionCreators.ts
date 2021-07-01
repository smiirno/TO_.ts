import * as actionTypes from './actionTypes'

export function addCar(car: ICar) {
    const action: CarAction = {
        type: actionTypes.ADD_CAR,
        car
    }
    return actionDispatch(action)
}

export function removeCar(car: ICar) {
    const action: CarAction = {
        type: actionTypes.REMOVE_CAR,
        car
    }
    return actionDispatch(action)
}

export function actionDispatch(action: CarAction) {
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}
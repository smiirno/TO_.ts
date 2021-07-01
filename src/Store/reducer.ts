import * as actionTypes from './actionTypes'

const initialState: CarState = {
    cars: [
        {id: 1, isActive: false, brand: 'Porsche', model: 'Panamera', carNumber: 'x181xx74', date: '01.01.2001'},
        {id: 2, isActive: true, brand: 'Audi', model: 'A7', carNumber: 'x281xx74', date: '01.01.2001'},
        {id: 3, isActive: true, brand: 'Audi', model: 'Q3', carNumber: 'x381xx74', date: '01.01.2001'},
        {id: 4, isActive: false, brand: 'VW', model: 'Golf R', carNumber: 'x481xx74', date: '01.01.2001'},
        {id: 5, isActive: true, brand: 'Skoda', model: 'Rapid', carNumber: 'x581xx74', date: '01.01.2001'},
        {id: 6, isActive: false, brand: 'Skoda', model: 'Octavia', carNumber: 'x681xx74', date: '01.01.2001'}
    ]
}

function convertDate(inputFormat:string) {
    function pad(s:number) { return (s < 10) ? '0' + s : s; }
    let d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.')
}

const reducer = (state: CarState = initialState, action: CarAction):CarState => {
    switch (action.type) {
        case actionTypes.ADD_CAR:
            const newCar:ICar = {
                id: Date.now(),
                isActive: true,
                brand: action.car.brand,
                model: action.car.model,
                carNumber: action.car.carNumber,
                date: convertDate(action.car.date)
            }
            return {
                ...state,
                cars: state.cars.concat(newCar)
            }
        case actionTypes.REMOVE_CAR:
            const updatedCars: ICar[] = state.cars.filter(
                car => car.id !== action.car.id
            )
            return {
                ...state,
                cars: updatedCars
            }
    }
    return state
}

export default reducer
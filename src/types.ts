// @ts-ignore
interface ICar {
    id: number
    isActive: boolean
    brand: string
    model: string
    carNumber: string
    date: string
}

type CarState = {
    cars: ICar[]
}

type CarAction = {
    type: string
    car: ICar
}

type DispatchType = (args: CarAction) => CarAction
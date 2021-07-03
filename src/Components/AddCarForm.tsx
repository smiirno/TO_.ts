import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../Styles/Modal.css'

type AddCarProps = {
    saveCar: (car: ICar | any) => void
}

const AddCarForm: React.FC<AddCarProps> = (props) => {

    const [car, setCar] = useState<ICar | {}>()
    const [modal, setModal] = useState<boolean>(false);

    const toggle = () => setModal(!modal);

    const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setCar({
            ...car,
            [event.currentTarget.id]: event.currentTarget.value,
        })
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        props.saveCar(car)
        setCar([])
    }

    return(
        <div>
            <Button className='btn btn-success' onClick={toggle}>test авто</Button>
            <Modal isOpen={modal} toggle={toggle} className=''>
                <ModalHeader toggle={toggle}>Запись автомобиля на ТО</ModalHeader>
                <ModalBody>

                    <form onSubmit={submitHandler} id='form'>
                        <input type='text' className='form-item form-control' id='brand'
                               onChange={changeHandler} placeholder='Марка автомобиля'/>
                        <input type='text' className='form-item form-control' id='model'
                               onChange={changeHandler} placeholder='Модель'/>
                        <input type='text' className='form-item form-control' id='carNumber'
                               onChange={changeHandler} placeholder='Гос. номер'/>
                        <input type='date' className='form-item form-control' id='date'
                               onChange={changeHandler}/>

                        <button type='submit' onClick={toggle} className='btn btn-outline-success'>
                            Добавить
                        </button>
                    </form>

                </ModalBody>
            </Modal>
        </div>
    )
}

// @ts-ignore
export default AddCarForm
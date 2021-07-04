import React, {useEffect, useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../Styles/Modal.css'

type AddCarProps = {
    saveCar: (car: ICar | any) => void
}

const AddCarForm: React.FC<AddCarProps> = (props) => {

    const [car, setCar] = useState<ICar | {}>()
    const [modal, setModal] = useState<boolean>(false);

    const [brandDirty, setBrandDirty] = useState<boolean>(false)
    const [brandError, setBrandError] = useState<string>('Поле не может быть пустым')
    const [modelDirty, setModelDirty] = useState<boolean>(false)
    const [modelError, setModelError] = useState<string>('Поле не может быть пустым')
    const [carNumberDirty, setCarNumberDirty] = useState<boolean>(false)
    const [carNumberError, setCarNumberError] = useState<string>('Поле не может быть пустым')
    const [formValid, setFormValid] = useState<boolean>(false)

    const toggle = () => setModal(!modal);

    useEffect(() => {
        if (brandError || modelError || carNumberError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [brandError, modelError, carNumberError])

    const blurHandler = (event: React.FormEvent) => {
        switch (event.currentTarget.id) {
            case 'brand':
                setBrandDirty(true)
                break
            case 'model':
                setModelDirty(true)
                break
            case 'carNumber':
                setCarNumberDirty(true)
                break
        }
    }

    const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.id === 'brand') {
            if (event.currentTarget.value !== '') {
                setBrandError('')
            }
        } else if (event.currentTarget.id === 'model') {
            if (event.currentTarget.value !== '') {
                setModelError('')
            }
        } else if (event.currentTarget.id === 'carNumber') {
            if (event.currentTarget.value !== '') {
                setCarNumberError('')
            }
        }
        setCar({
            ...car,
            [event.currentTarget.id]: event.currentTarget.value,
        })
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        props.saveCar(car)
        setCar([])
        setFormValid(false)
        setBrandError('Поле не может быть пустым')
        setBrandDirty(false)
        setModelError('Поле не может быть пустым')
        setModelDirty(false)
        setCarNumberError('Поле не может быть пустым')
        setCarNumberDirty(false)
    }

    return(
        <div>
            <Button className='btn btn-success' onClick={toggle}>Запись авто</Button>
            <Modal isOpen={modal} toggle={toggle} className=''>
                <ModalHeader toggle={toggle}>Запись автомобиля на ТО</ModalHeader>
                <ModalBody>

                    <form onSubmit={submitHandler} id='form'>

                        {(brandDirty && brandError) && <div style={{color: 'red'}}>{brandError}</div>}
                        <input type='text' className='form-item form-control' id='brand'
                               onChange={changeHandler} onBlur={event => blurHandler(event)} placeholder='Марка автомобиля'/>

                        {(modelDirty && modelError) && <div style={{color: 'red'}}>{modelError}</div>}
                        <input type='text' className='form-item form-control' id='model'
                               onChange={changeHandler} onBlur={event => blurHandler(event)} placeholder='Модель'/>

                        {(carNumberDirty && carNumberError) && <div style={{color: 'red'}}>{carNumberError}</div>}
                        <input type='text' className='form-item form-control' id='carNumber'
                               onChange={changeHandler} onBlur={event => blurHandler(event)} placeholder='Гос. номер'/>

                        <input type='date' className='form-item form-control' id='date'
                               onChange={changeHandler}/>

                        {(!formValid) && <div style={{color: 'red'}}>Одно из полей не заполнено</div>}
                        <button type='submit' disabled={!formValid} onClick={toggle} className='btn btn-outline-success'>
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
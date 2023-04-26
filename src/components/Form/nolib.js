import { useState } from 'react';
import { FormInput } from './FormInput'
import { FormField } from '../Form/style'

const Form = () => {
    const [inputs ,setInputs] = useState({
        name: '',
        cardNumber: '',
        date: '',
        cvc: ''
    })

    const handleChange = (event) => {
        const { target } = event
        const { name } = target
        const { value } = target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <FormField onSubmit={handleSubmit}>
            <FormInput 
            name='name' 
            placeholder='e.g. Jane Appleseed'
            type='text'
            label='Cardholder Name' 
            onChange={handleChange}
            value={inputs.name}
            />

            <FormInput 
            name='cardNumber' 
            placeholder='e.g. 1234 5678 9123 0000'
            type='text'
            lebel='Card Number'
            onChange={handleChange}
            value={inputs.cardNumber} 
            />

            <FormInput/>
            <FormInput 
            name='cvc' 
            placeholder='e.g. 123'
            type='text'
            label='CVC' 
            onChange={handleChange}
            value={inputs.cvc}
            />
            <button type='submit'>Confirm</button>
        </FormField>
    )
}

export { Form }
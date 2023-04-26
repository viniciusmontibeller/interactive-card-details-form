import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { FormField, InputField } from "./style"
import { Button } from '../Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createFormSchema = z.object({
    name: z.string()
        .nonempty("Can't be blank")
        .regex(/^[a-zA-Z\s]*$/, "Wrong format, text only"),
    cardNumber: z.string()
        .nonempty("Can't be blank")
        .regex(/^(?=.*[0-9])[- +()0-9]+$/, 'Wrong format, numbers only')
        .min(13, "Must be at least 13 numbers"),
    date: z.object({
        month: z.string()
            .nonempty("Can't' be blank")
            .regex(/^[0-1][0-2]*$/, "Must be month format")
            .min(2, "Must be 2 digits"),
        year: z.string()
            .nonempty("Can't' be blank")
            .regex(/^[2-9][3-9]*$/, "Must be a valid date")
            .min(2, "Must be 2 digits"),
    }),
    cvc: z.string()
        .nonempty("Can't be blank")
        .regex(/^[0-9]*$/, "Wrong format, numbers only")
        .min(3, "Must be 3 digits"),
})

const normalizeCardNumber = (value) => {
    return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

const Form = ({onChange, onComplete}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: '',
            cardNumber: '',
            date: {
                month: '',
                year: ''
            },
            cvc: ''
        },
        resolver: zodResolver(createFormSchema)
    });

    useEffect(() => {
        if (typeof onChange === "function"){
            const subscription = watch(onChange)
            return () => subscription.unsubscribe();
        }
      }, [watch, onChange]);

    return (
        <FormField
        onSubmit={handleSubmit((data) => {
            console.log(data)
            return onComplete(true)
        })}>
            <InputField>
                <label htmlFor='name'>Cardholder Name</label>
                <input
                    type='text'
                    autoFocus
                    maxLength={30}
                    className={errors.name ? "invalid" : "valid"}
                    placeholder='e.g. Jane Appleseed'
                    {...register("name"
                    )}
                />
                <span>{errors.name?.message}</span>
            </InputField>
            <InputField>
                <label htmlFor='cardNumber'>Card Number</label>
                <input
                    type='text'
                    placeholder='e.g. 1234 5678 9123 0000'
                    maxLength={19}
                    inputMode='numeric'
                    className={errors.cardNumber ? "invalid" : "valid"}
                    {...register("cardNumber",
                        {
                            onChange: (event) => {
                                const { value } = event.target
                                return event.target.value = normalizeCardNumber(value)
                            }
                        })}
                />
                <span>{errors.cardNumber?.message}</span>
            </InputField>
            <InputField>
                <div>
                    <label>Exp. Date (MM/YY)</label>
                    <div>
                        <input
                            type='text'
                            placeholder='MM'
                            maxLength={2}
                            inputMode='numeric'
                            className={errors.date?.month ? "invalid" : "valid"}
                            {...register("date.month")}
                        />

                        <input
                            type='text'
                            placeholder='YY'
                            maxLength={2}
                            inputMode='numeric'
                            className={errors.date?.year ? "invalid" : "valid"}
                            {...register("date.year")}
                        />
                    </div>
                    {errors.date && (<span>{errors.date.month?.message || errors.date.year?.message}</span>)}
                </div>
                <div>
                    <label htmlFor='cvc'>CVC</label>
                    <input
                        type='text'
                        placeholder='e.g. 123'
                        maxLength={3}
                        inputMode='numeric'
                        className={errors.cvc ? "invalid" : "valid"}
                        {...register("cvc")}
                    />
                    <span>{errors.cvc?.message}</span>
                </div>
            </InputField>
            <Button type='submit'>Confirm</Button>
        </FormField>
    )
}

export { Form }


import { InputField } from "../style"

const FormInput = (props) => {
    const { label, name, errorsMessage, ...inputProps} = props
    return (
        <InputField>
            <label htmlFor={name}>{label}</label>
            <input {...inputProps}/>
        </InputField>
    )
}

export { FormInput }

// {/* <label htmlFor='name'>Cardholder Name</label>
//                 <input
//                     type='text'
//                     maxLength={30}
//                     className={errors.name ? "invalid" : "valid"}
//                     placeholder='e.g. Jane Appleseed'
//                     {...register("name"
//                     )}
//                 />
//                 <span>{errors.name?.message}</span> */}
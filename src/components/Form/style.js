import styled from "styled-components"

const FormField = styled.form`
    width: 100%;

    @media(max-width: 450px){
        font-size: 15px;
    }

    label{
            display: inline-block;
            margin-bottom: 10px;
            text-transform: uppercase;
        }

    div:nth-child(3){
        display: flex;
        justify-content: space-between;
        gap: 20px;
        

        div:nth-child(1){
            flex-basis: 60%;
            div{
                display: flex;
                gap: 10px;
                
            }
        }
    }

    input{
        width: 100%;
        padding: 10px;
        outline: none;
        border: ${props => `1px solid ${props.theme.colors.light}`};
        border-radius: 10px;
        font-family: inherit;
        font-size: inherit;
        margin-bottom: 5px;

        @media(max-width: 450px){
        margin-bottom: 3px;
    }
    }
    
    input:focus{
        background: linear-gradient(#fff, #fff) padding-box,
                    linear-gradient(${props => props.theme.colors.inputGrad}) border-box;
        border: 1px solid transparent;
        border-radius: 10px;
    }

    input.invalid{
        border: ${props => `1px solid ${props.theme.colors.inputError}`};
    }

    span{
        color: ${props => props.theme.colors.inputError};
        font-size: 14px;
        display: block;
        height: 0;

        @media(max-width: 450px){
        font-size: 12px;
    }
    }
`

const InputField = styled.div`
    margin-bottom: 30px;

    @media(max-width: 450px){
        margin-bottom: 20px;
    }

`

export { FormField, InputField }
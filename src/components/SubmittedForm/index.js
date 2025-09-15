import styled from 'styled-components'
import complete from '../../assets/icon-complete.svg'
import { Button } from '../Button'

const SubmittedForm = () => {
    return (
        <CompletedForm>
            <img src={complete} alt="Completed" />
            <h2>Thank you!</h2>
            <p>We've added your card details</p>
            <span style={{ color: "red" }}>No real data was saved or sent.</span>
            <Button>Continue</Button>
        </CompletedForm>
    )
}

const CompletedForm = styled.div`
    text-align: center;
    width: 100%;
    
    img{
        margin-bottom: 30px;
    }

    h2{
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    p{
        color: ${props => props.theme.colors.dark};
        margin-bottom: 30px;
    }
`

export { SubmittedForm }
import styled from 'styled-components'

const Button = ({ children }) => {
    return (
        <>
            <Btn>
                {children}
            </Btn>
        </>
    )
}

const Btn = styled.button`
    background-color: ${props => props.theme.colors.veryDark};
    width: 100%;
    padding: 10px;
    outline: none;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: none;
    border-radius: 10px;
    font-family: inherit;
    font-size: inherit;
    margin-bottom: 5px;
    :hover{
        background-color: hsl(278, 94%, 20%);
    }
`

export { Button }
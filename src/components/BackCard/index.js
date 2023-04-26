import styled from "styled-components"
import img from '../../assets/bg-card-back.png'

const BackCard = ({value}) => {
    return (
        <BackCardContainer>
            <Back>
            <p>{value.cvc || "000"}</p>
            </Back>
        </BackCardContainer>
    )
}

const BackCardContainer = styled.div`
    width: 447px;
    height: 245px;
    transform: translateX(20%);

    @media(max-width: 1150px){
        position: absolute;
        top: 0px;
        z-index: -1;
    }

    /* @media(max-width: 600px){
        scale: 0.8;
        transform: translateX(0%);
     } */
`

const Back = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    position: relative;
    color: white;
    
    
    p {
        position: absolute;
        top: 45%;
        right: 15%;
        letter-spacing: 2px;
    }
`
export { BackCard }
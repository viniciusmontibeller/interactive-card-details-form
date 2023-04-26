import styled from "styled-components"
import img from '../../assets/bg-card-front.png'
import cardLogo from '../../assets/card-logo.svg'

const FrontCard = ({value}) => {
    
    return (
        <FrontCardContainer>
            <ContainerImg>
                <CardImg src={img} alt='Credit Card Front'/>
                <CardInfo>
                <img src={cardLogo} alt='Credit Card Logo'/>
                <Info>
                    <Number>{value.cardNumber || "0000 0000 0000 0000"}</Number>
                    <div>
                        <Name>{value.name || "Jane Appleseed"}</Name>
                        <p>{(value.date && (value.date.month || value.date.year)) ? `${value.date.month}/${value.date.year}` : "00/00"}</p>
                    </div>
                </Info>
                </CardInfo>
            </ContainerImg>
        </FrontCardContainer>
    )
}

const FrontCardContainer = styled.div`
    margin-bottom:40px;
     @media(max-width: 1150px){
        position: absolute;
        bottom: 0;
        margin-bottom: 0;
     }

     /* @media(max-width: 600px){
        scale: 0.8;
        right: 0;
    } */
`

const Name = styled.p`
    text-transform: uppercase;
    letter-spacing: 2px;
`

const ContainerImg = styled.div`
    position: relative;
    width: 447px;
    height: 245px;

   
    
`

const CardImg = styled.img`
    position: absolute;
`

const CardInfo = styled.div`
    position: absolute;
    height: 100%;
    z-index: 2;
    padding: 30px;
    width: 100%;
    display: grid;
`

const Info = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: space-between;

    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`

const Number = styled.p`
    font-size: 28px;
    letter-spacing: 4px;
    height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export { FrontCard }
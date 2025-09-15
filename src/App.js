import { Form } from './components/Form';
import { GlobalStyle } from './global/global';
import { FrontCard } from './components/FrontCard';
import { BackCard } from './components/BackCard';
import { Theme } from './global/Theme.jsx'
import styled from 'styled-components';
import { useState } from 'react';
import { SubmittedForm } from './components/SubmittedForm';

function App() {
  const [inputs, setInputs] = useState({})

  const [submitted, setSubmitted] = useState(false)

  return (
    <Theme>
      <GlobalStyle />
      <p style={{ textAlign: 'center'}}>This is a educational project, no real data is collected here</p>
      <Main>
        <ContainerCards>
          <FrontCard value={inputs}/>

          <BackCard value={inputs}/>
        </ContainerCards>
        <FormContainer>
          {
          submitted ? <SubmittedForm/> : <Form onChange={setInputs} onComplete={setSubmitted}/>
          }
        </FormContainer> 
      </Main>
    </Theme>
  );
}

const Main = styled.main`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  @media(max-width: 1150px){
    flex-direction: column;
    max-width: 400px;
    margin: 20px;
  }

  @media(max-width: 450px){
    max-width: 340px;
  }
`

const FormContainer = styled.section`
  width: 400px;
  @media(max-width: 700px){
    max-width: 100%;
  }
`

const ContainerCards = styled.section`
  @media(max-width: 1150px){
    position: relative;
    width: 540px;
    height: 383px;
    margin-bottom: 60px;
  }

  @media(max-width: 700px){
    scale: 0.75;
    margin-bottom: -20px;
    margin-top: -40px;
  }

  @media(max-width: 450px){
    scale: 0.63;
    margin-top: -70px;
    margin-bottom: -30px;
  }
`

export default App;

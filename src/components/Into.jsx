import React from 'react';
import styled from 'styled-components';
import Woman from '../img/woman.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 2px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
`;

const Into = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Description>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Description>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us (012) 345-6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Into;

import React from 'react';
import styled from 'styled-components';
import Map from '../img/map.png';
import Phone from '../img/phone.png';
import Send from '../img/send.png';

const Container = styled.div`
  height: 90%;
  background: url('https://www.toptal.com/designers/subtlepatterns/uploads/triangles_pattern.png');
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  margin: 50px;
  margin-left: 210px;
  @media only screen and (max-width: 480px) {
    margin: 30px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0px;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AdressItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder='Your Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='Your Message' />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AdressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York,USA</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Phone} />
            <Text>+123 456 789 </Text>
            <Text>+134 8764 874</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={Send} />
            <Text>contactagency.dev salesagency.dev </Text>
          </AdressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;

import React from "react";
import styled from "styled-components";

const RatingSubmit = ({ rating }) => {
  return (
    <Container>
      <IconContainer>
        <img
          style={{ width: " 100%", height: "100%" }}
          src="./images/illustration-thank-you.svg"
          alt=""
        />
      </IconContainer>
      <ButtonContainer>
        <Button>You selected {rating} out of 5</Button>
      </ButtonContainer>
      <Title>Thank you!</Title>
      <Description>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Description>
    </Container>
  );
};
export default RatingSubmit;

const Container = styled.div`
  width: 320px;
  max-width: 320px;
  background-color: #1f2630;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  width: 40%;
  height: 40%;
  @media (max-width: 450px) {
    width: 70%;
    height: 46%;
  }
`;

const IconContainer = styled.div`
  background-color: transparent;
  margin-bottom: 20px;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

const Description = styled.p`
  width: 91%;
  font-weight: 400;
  font-size: 12px;
  opacity: 0.7;
  line-height: 20px;
  text-align: center;
  margin-top: -10px;
`;

const ButtonContainer = styled.div`
  background-color: transparent;

  width: 100%;
  height: 40px;
`;

const Button = styled.button`
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #262f39;
  border: none;
  height: 76%;
  width: 51%;
  color: #ef7613;
  :hover {
    background-color: whitesmoke;
    color: #ef7613;
  }
  @media (max-width: 450px) {
    width: 61%;
  }
`;

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RatingApp = ({ rating, setRating }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <Container>
      <IconContainer>
        <img
          style={{ width: " 14px", height: "14px" }}
          src="./images/icon-star.svg"
          alt=""
        />
      </IconContainer>
      <Title>How did we do?</Title>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>
      <NumberRow>
        <NumberContainer
          onClick={() => setRating(1)}
          style={{ backgroundColor: rating === 1 ? "#7c8798" : "" }}
        >
          <Num>1</Num>
        </NumberContainer>
        <NumberContainer
          onClick={() => setRating(2)}
          style={{ backgroundColor: rating === 2 ? "#7c8798" : "" }}
        >
          <Num>2</Num>
        </NumberContainer>
        <NumberContainer
          onClick={() => setRating(3)}
          style={{ backgroundColor: rating === 3 ? "#7c8798" : "" }}
        >
          <Num>3</Num>
        </NumberContainer>
        <NumberContainer
          onClick={() => setRating(4)}
          style={{ backgroundColor: rating === 4 ? "#7c8798" : "" }}
        >
          <Num>4</Num>
        </NumberContainer>
        <NumberContainer
          onClick={() => setRating(5)}
          style={{ backgroundColor: rating === 5 ? "#7c8798" : "" }}
        >
          <Num>5</Num>
        </NumberContainer>
      </NumberRow>
      <ButtonContainer>
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </ButtonContainer>
    </Container>
  );
};

export default RatingApp;

const Container = styled.div`
  width: 320px;
  max-width: 320px;
  background-color: #1f2630;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px;
  width: 40%;
  height: 46%;

  @media (max-width: 450px) {
    width: 70%;
    height: 46%;
  }
`;

const IconContainer = styled.div`
  background-color: #262f39;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2``;

const Description = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  opacity: 0.7;
  line-height: 20px;
`;

const NumberRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 20px;
`;

const NumberContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #262f39;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: #ef7613;
    cursor: pointer;
  }
`;

const Num = styled.div`
  opacity: 0.7;
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
  background-color: #ef7613;
  border: none;
  height: 100%;
  width: 100%;
  color: whitesmoke;
  text-transform: uppercase;
  letter-spacing: 2px;
  :hover {
    background-color: whitesmoke;
    color: #ef7613;
  }
`;

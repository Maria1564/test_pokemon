import { styled } from "@linaria/react";

export const Card = styled.div`
  width: 484px;
  min-height: 500px;
  background-color: black;
  padding: 44px 44px 16px;
  display: flex;
  flex-direction: column;
  color: #a0a0a0;
  font-family: "Raleway", serif;
  font-weight: 500;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

export const Image = styled.img`
  object-fit: cover;
  margin: 44px 0 39px;
`;

export const PokemonDetails = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 17px;

  &:first-child {
    margin-top: 0;
  }
`;
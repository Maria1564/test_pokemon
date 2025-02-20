import { styled } from "@linaria/react";

export const WrapperContent = styled.div`
  background-color: #131313;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 100px 0;
  font-family: "Raleway", serif;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
export const TopInfo = styled.div`
  width: 980px;
  margin: 0 auto 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const Link = styled.a`
  border: 1px solid white;
  font-size: 12px;
  font-weight: 500;
  padding: 7px;
  text-transform: uppercase;
  cursor: pointer;
`

export const Addition = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
`

export const Text = styled.p`
  width: 108px;
  font-weight: 600;
  font-size: 12px;
`

export const Icon = styled.img`
  object-fit: cover;
`

export const ListChip = styled.div`
  display: flex;
  max-width: 484px;
  flex-wrap: wrap;
  gap: 10px 6px;

  font-size: 20px;
`;

export const Chip = styled.div`
  padding: 20px;
  color: white;
  background-color: #1986ec;
  width: max-content;
  border-radius: 44px;
  cursor: pointer;
`;
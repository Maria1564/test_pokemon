import { styled } from "@linaria/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

type PokemonInfoProps = {
  selectedPokemon: string;
};

const Card = styled.div`
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

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;



const Image = styled.img`
  object-fit: cover;
    margin: 44px 0 39px;
`;

const PokemonDetails = styled.div`
  width: 100%;
`;

const Text = styled.p`
  font-size: 17px;

  &:first-child{
    margin-top: 0;
    }
`;

const PokemonInfo: React.FC<PokemonInfoProps> = ({ selectedPokemon }) => {
  const [info, setInfo] = useState<null | IPokemon>(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then(({ data }) => {
        setInfo({
          id: data.id,
          name: data.species.name,
          img: data.sprites.front_default,
          height: data.height,
          attack: data.stats[1].base_stat,
        });
      });
  }, [selectedPokemon]);

  return (
    <>
      {selectedPokemon && (
        <Card>
          <Title>{info?.name}</Title>
          <Image width="396" height="297" src={info?.img} />
          <PokemonDetails>
            {/* не получилось найти в скольки сериях снялся */}
            <Text>id: {info?.id}</Text>
            <Text>height: {info?.height}</Text>
            <Text>attack: {info?.attack}</Text>
          </PokemonDetails>
        </Card>
      )}
    </>
  );
};

export default PokemonInfo;

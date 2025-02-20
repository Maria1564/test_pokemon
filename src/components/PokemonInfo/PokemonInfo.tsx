import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Title, PokemonDetails, Image, Text } from "./styles";

type PokemonInfoProps = {
  selectedPokemon: string;
};


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

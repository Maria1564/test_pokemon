import React, { useState } from "react";
import { styled } from "@linaria/react";
import PokemonInfo from "../PokemonInfo/PokemonInfo";
import { WrapperContent, TopInfo, Link, Addition, Icon, Content, ListChip, Chip, Text } from "./styles";



type WrapperProps = {
  listPok: IListPokemon[];
};
const Wrapper: React.FC<WrapperProps> = ({ listPok }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  const handleClick = (namePokemon: string): void => {
    setSelectedPokemon(namePokemon);
  };

  return (
    <WrapperContent>
      <TopInfo>
        <Link>Покемоны API</Link>
      <Addition>
        <Icon src='/Icon.png'/>
        <Text>Нажмите на
        нужное Покемона</Text>
      </Addition>
      </TopInfo>
      <Content>
        <ListChip>
          {listPok.map(({ name }) => (
            <Chip key={name} onClick={() => handleClick(name)}>
              {name}
            </Chip>
          ))}
        </ListChip>
        <PokemonInfo selectedPokemon={selectedPokemon} />
      </Content>
    </WrapperContent>
  );
};

export default Wrapper;

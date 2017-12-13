import React from 'react';
import SelectItemsPerPageButtons from './SelectItemsPerPageButton';
import PaginationContainer from './PaginationContainer';
import PokeList from './PokeList';

const PokemonIndexList = ({displayed, options, selectedValue, allValue, onOptionSelected, listOfPokemon, btnSize, totalPages, activePage, onSelect, openModal}) => {
  let style = { display: 'none' };

  if (displayed) {
    style.display = 'initial';
  }

  return (
    <div style={style}>
      <SelectItemsPerPageButtons
        options={options}
        selectedValue={selectedValue}
        allValue={allValue}
        onOptionSelected={onOptionSelected}
      />

      <PokeList
        listOfPokemon={listOfPokemon}
        openModal={openModal}
      />

      <PaginationContainer
        btnSize={btnSize}
        totalPages={totalPages}
        activePage={activePage}
        onSelect={onSelect}
      />
    </div>
  )
}

export default PokemonIndexList;

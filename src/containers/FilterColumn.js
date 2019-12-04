import React from "react";
import { Dropdown } from "semantic-ui-react";

const FilterColumn = (props) => {
  
    const genOptions = [
      {
        key: 'All',
        text: 'All',
        value: 0,
      },
      {
        key: 'Generation 1',
        text: 'Generation 1',
        value: 1,
      },
      {
        key: 'Generation 2',
        text: 'Generation 2',
        value: 2,
      },
      {
        key: 'Generation 3',
        text: 'Generation 3',
        value: 3,
      },
      {
        key: 'Generation 4',
        text: 'Generation 4',
        value: 4,
      },
      {
        key: 'Generation 5',
        text: 'Generation 5',
        value: 5,
      },
      {
        key: 'Generation 6',
        text: 'Generation 6',
        value: 6,
      }
    ]

    const typeOptions = [
      {
        key: 'All',
        text: 'All',
        value: 0,
      },
      {
        key: 'Normal',
        text: 'Normal',
        value: 1,
      },
      {
        key: 'Fire',
        text: 'Fire',
        value: 10,
      },
      {
        key: 'Water',
        text: 'Water',
        value: 11,
      },
      {
        key: 'Electric',
        text: 'Electric',
        value: 13,
      },
      {
        key: 'Grass',
        text: 'Grass',
        value: 12,
      },
      {
        key: 'Ice',
        text: 'Ice',
        value: 15,
      },
      {
        key: 'Fighting',
        text: 'Fighting',
        value: 2,
      },
      {
        key: 'Poison',
        text: 'Poison',
        value: 4,
      },
      {
        key: 'Ground',
        text: 'Ground',
        value: 5,
      },
      {
        key: 'Flying',
        text: 'Flying',
        value: 3,
      },
      {
        key: 'Psychic',
        text: 'Psychic',
        value: 14,
      },
      {
        key: 'Bug',
        text: 'Bug',
        value: 7,
      },
      {
        key: 'Rock',
        text: 'Rock',
        value: 6,
      },
      {
        key: 'Ghost',
        text: 'Ghost',
        value: 8,
      },
      {
        key: 'Dragon',
        text: 'Dragon',
        value: 16,
      },
      {
        key: 'Dark',
        text: 'Dark',
        value: 17,
      },
      {
        key: 'Steel',
        text: 'Steel',
        value: 9,
      },
      {
        key: 'Fairy',
        text: 'Fairy',
        value: 18,
      }
    ]


    const handleGenChange = (e, data) => {
      props.setGenFilter(data.value)
    }

    const handleTypeChange = (e, data) => {
      props.setTypeFilter(data.value)
    }

    return (
      <>
        <h3>Generation</h3>
        <Dropdown selection options={genOptions} defaultValue={0} onChange={handleGenChange} upward={false}/>
        <h3>Type</h3>
        <Dropdown selection options={typeOptions} defaultValue={0} onChange={handleTypeChange} upward={true}/>
      </>
    );
}

export default FilterColumn;

import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  column-gap: 2.25rem;
  row-gap: 3.75rem;
  ${'' /* padding: 0 2.25rem; */}
  flex-wrap: wrap;
`;

export default ShoeGrid;

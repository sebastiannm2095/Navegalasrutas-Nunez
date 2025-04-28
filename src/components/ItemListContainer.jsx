import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
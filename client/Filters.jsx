import React, { useContext } from 'react';
import { StoreContext } from './Store.jsx';

const Filters = () => {
  const [Store, setStore] = useContext(StoreContext);

  return (
    <div id="filterContainer">
      <div id="filters">
        
      </div>
    </div>
  )
}

export default Filters;
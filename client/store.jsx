import React, { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [Store, setStore] = useState({
    user: '',
    verified: false,
    userFavs: [],
    linkedInRes: [],
    indeedRes: [],
    glassDoorRes: [],
    linkUpRes: [],
    keywordSearch: '',
    locationSearch: '',
    job_Id: null,
  })

  return (
    <StoreContext.Provider value={[Store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContext;
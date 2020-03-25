import React, { useContext } from "react";
import { StoreContext } from "./Store.jsx";

const Favorites = () => {
  const [Store, setStore] = useContext(StoreContext);

  const searchResults = Store.userFavs;

  return <div id="resultHolder">{searchResults}</div>;
};

export default Favorites;

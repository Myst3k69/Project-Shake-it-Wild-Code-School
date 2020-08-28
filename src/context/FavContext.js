
import React, {createContext, useState} from 'react';

export const FavContext= createContext();



export const FavProvider = (props) => {

    const [favCocktails,setFavCocktails]= useState([]) 
   

return(

    <FavContext.Provider value={[favCocktails,setFavCocktails]}>
    {props.children}
    </FavContext.Provider>
  );
};
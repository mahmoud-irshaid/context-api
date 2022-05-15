import React, {useState , createContext} from 'react';

export const MovieContext = createContext()

export const MovieProvider = (props) =>{
    const [movies, setmovies] = useState([
        {name:'transformers'},
        {name:'mad max'},
        {name:'godzilla'}
      ]);
      return(
          <MovieContext.Provider  value={{movies , setmovies}}>
              {props.children}
          </MovieContext.Provider>

      )
}
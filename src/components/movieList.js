import React, { useState, useContext } from 'react';
import Movie from './movie'
import { MovieContext } from '../context'


function MovieList() {
    //const [movies, setmovies] = useContext(MovieContext)
    const [addname, setaddname] = useState('')

    return (
        <MovieContext.Consumer>{ (context) => {
         const {movies ,setmovies} = context

         function addMovie(e) {
            e.preventDefault()
            const newMovie = { name: addname }
            setmovies([...movies, newMovie])
        }
         console.log(context)
            return (
                <>
                <form onSubmit={addMovie}>
                    <input type='text' placeholder='movie name' onChange={(e) => { setaddname(e.target.value) }} />
                    <input type='submit' />
                </form>
    
                {movies.map((movie) => (<Movie name={movie.name}/> ))}
                </>
            )
        
        }}</MovieContext.Consumer >
    )
}
export default MovieList




/*
--THREE WAYS TO DISTRIBUTE CONTEXT --

1. static context type = MovieContext
    then use this.context below it
    ** should use class component 

2. <MovieContext.Consumer>{ (context) => {
    }}
    ** can use class component  or  functional component


3. useContext hook     
    const context = useContext(MovieContext)



*/
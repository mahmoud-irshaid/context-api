import React, { Component ,useState } from 'react';
import './App.css';
import MovieList from './components/movieList'
import {MovieProvider} from './context'

function App() {
  
  return (
    <>
    <MovieProvider>
       <MovieList/>
    </MovieProvider>
    </>
  )
}

export default App;

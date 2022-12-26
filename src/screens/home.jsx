import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';
import { Library } from './library';
//Api

export const Home = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/feed' element={() => 'Feed'}></Route>
        <Route path='/trending' element={() => 'Trending'}></Route>
        <Route path='/player' element={() => 'Player'}></Route>
        <Route path='/recommended' element={() => 'Recommended'}></Route>
      </Routes>
    </BrowserRouter>
  );
};

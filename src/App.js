import React from 'react'
import { Route, Routes } from "react-router-dom";
import {VideoListing} from "./pages/VideoListing/VideoListing";
import {Login} from './pages/Login/Login';
import {Signup} from './pages/Signup/Signup';
import {VideoDetails} from './pages/VideoDetails/VideoDetails';
import {Like} from './pages/Like/Like';
import {WatchLater} from './pages/WatchLater/WatchLater'
import {History} from './pages/History/History'
import {Playlist} from './pages/Playlist/Playlist'
import { PlaylistDetails } from './pages/PlaylistDetails/PlaylistDetails';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<VideoListing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/video/:videoId' element={<VideoDetails />}></Route>
        <Route path='/like' element={<Like />}></Route>
        <Route path='/watchlater' element={<WatchLater />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path='/playlist' element={<Playlist />}></Route>
        <Route path='/playlist/:playlistId' element={<PlaylistDetails />}></Route>
      </Routes>
    
  );
}

export { App };

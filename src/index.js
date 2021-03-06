import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./context/auth-context";
import { VideoProvider } from "./context/video-context";
import { LikeProvider } from './context/like-context';
import { WatchlaterProvider } from "./context/watchlater-context";
import { HistoryProvider } from "./context/history-context";
import { PlaylistProvider } from "./context/playlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <VideoProvider>
      <LikeProvider>
        <WatchlaterProvider>
          <HistoryProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </HistoryProvider>
        </WatchlaterProvider>
      </LikeProvider>
    </VideoProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

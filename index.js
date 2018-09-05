import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'

const app = document.getElementById('app')
// que voy a renderizar, donde lo voy a hacer
render(<Playlist data={ data }  />,app);

import { Route, Routes, useParams } from 'react-router-dom';
import './App.css'
import ListOfGifs from './components/ListOfGifs';
import Detail from './components/Detail';
import { GifContextProvider } from './contexts/GifContext';
import Home from './components/Home';

function App() {
  return (
    <GifContextProvider>
      <Routes>
            <Route path='/' element={<Home />} exact/>

            <Route path='/gif/:gifId' element={<Detail />} exact/>

            <Route path='/gifs/:topic' element={<ListOfGifs />} exact />
        </Routes>
    </GifContextProvider>
  );
}

export default App;

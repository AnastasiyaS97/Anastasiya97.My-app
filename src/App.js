
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
// import { Route } from 'react-router-dom';
// import { Profiler } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path="/dialogs/*" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}


export default App;

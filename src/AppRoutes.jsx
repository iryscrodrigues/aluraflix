import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EstilosGlobais from './Components/EstilosGlobais';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import NovoVideo from './Pages/NovoVideo';
import NotFound from './Pages/NotFound';
import styled from 'styled-components';

const FundoGradiente = styled.div`
  background: #2e437a;
  width: 100%;
  min-height: 100vh;
`;

const AppRoutes = () => {
  const [videos, setVideos] = useState([]);

  const addVideo = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home videos={videos} />} />
            <Route path="/novovideo" element={<NovoVideo onAddVideo={addVideo} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FundoGradiente>
    </>
  );
};

export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render }from 'react-dom';

import SplashScreen from './components/SplashScreen';
import Play from './components/Play';
import Layout from './components/Layout';

render(
   <Router>
     <Layout>
       <Routes>
         <Route exact path="/" element={<SplashScreen/>} />
         <Route path="/:type" element={<Play path="/:type" />} />
       </Routes>
     </Layout>
   </Router> 
   , document.getElementById('root')
);
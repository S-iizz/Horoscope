import React from "react";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";

import TodayFortune from './pages/TodayFortune';
import TodayFortuneSelect from "./pages/TodayFortuneSelect";
import TodayFortuneResult from "./pages/TodayFortuneResult";

import Zodiac from "./pages/Zodiac";
import ZodiacSelect from "./pages/ZodiacSelect";
import ZodiacFortune from "./pages/ZodiacFortune";
import ZodiacMatch from "./pages/ZodiacMatch";

import Tarot from "./pages/Tarot";
import TarotSelect from "./pages/TarotSelect";
import TarotResult from "./pages/TarotResult";
import TarotFortune from "./pages/TarotFortune";

import PastLife from "./pages/PastLife";
import PastLifeSelect from "./pages/PastLifeSelect";
import PastLifeResult from "./pages/PastLifeResult";

import Divination from "./pages/Divination";
import DivinationSelect from "./pages/DivinationSelect";
import DivinationResult from "./pages/DivinationResult";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodayFortune />} />
        <Route path="/select" element={<TodayFortuneSelect />} />
        <Route path="/result" element={<TodayFortuneResult />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/zodiac/select" element={<ZodiacSelect />} />
        <Route path="/zodiac/fortune" element={<ZodiacFortune />} />
        <Route path="/zodiac/match" element={<ZodiacMatch />} />
        <Route path="/tarot" element={<Tarot />} />
        <Route path="/tarot/select" element={<TarotSelect />} />
        <Route path="/tarot/result" element={<TarotResult />} />
        <Route path="/tarot/fortune" element={<TarotFortune />} />
        <Route path="/pastlife" element={<PastLife />} />
        <Route path="/pastlife/select" element={<PastLifeSelect />} />
        <Route path="/pastlife/result" element={<PastLifeResult />} />
        <Route path="/divination" element={<Divination />} />
        <Route path="/divination/select" element={<DivinationSelect />} />
        <Route path="/divination/result" element={<DivinationResult />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

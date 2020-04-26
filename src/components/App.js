import React from 'react';
import '../reset.css';
import StockTwits from './StockTwits/StockTwits';
import Header from './Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <StockTwits />
    </>
  );
}

import React from 'react';
import BlockBg from '../ui/blockBg/BlockBg';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

export default function Layout({ children }) {
  return (
    <>
        <Navigation />
        <BlockBg />
        {children }
        <Footer />
    </>
  )
}

import React from 'react';
import BlockBg from '../ui/blockBg/BlockBg';
import Navigation from '../navigation/Navigation';

export default function Layout({ children }) {
  return (
    <>
        <Navigation />
        <BlockBg />
        {children }
    </>
  )
}

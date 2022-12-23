import React from 'react';
import BlockBg from '../ui/blockBg/BlockBg';

export default function Layout({ children }) {
  return (
    <>
        <BlockBg />
        {children }
    </>
  )
}

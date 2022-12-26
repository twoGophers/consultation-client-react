import React from 'react';

interface Title {
    title: string
}

export default function TitleBlock({ title }: Title) {
  return (
    <h2 className='titleblock'>{ title }</h2>
  )
}

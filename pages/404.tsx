import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="error container">
        <h2>404</h2>
        <p>Страница не найдена!</p>
        <p>Вернуться на <Link href={'/'}>Главную</Link></p>
    </div>
  )
}

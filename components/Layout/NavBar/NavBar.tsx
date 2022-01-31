import Link from 'next/link';
import React, { ReactElement } from 'react';

export default function Header(): ReactElement {
  return (
    <header>
      <h1>PlantShop</h1>
      <nav>
        <Link href={''}>vbnm</Link>
        <Link href={''}>123</Link>
        <Link href={''}>dsfg</Link>
      </nav>
    </header>
  );
}

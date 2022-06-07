import { ChangeEvent, ReactElement, useState } from 'react';
import styles from './WishlistProduct.module.scss';
import Image from 'next/image';
import BinIcon from 'public/icons/binIcon.svg';
import { formatCurrency } from 'utils/formatCurrency';
import { ProductProps } from 'types/types';

export default function WishlistProduct({ id, name, price }: ProductProps): ReactElement {
  return (
    <li className={styles.productContainer}>
      <p className={styles.productName}>Lorem ipsum dolor sit amet</p>
      <p className={styles.price}>Price: {formatCurrency(12.12)}</p>
      <button type='button' className={styles.removeButton}>
        <span className='visually-hidden'>Remove item from the wishlist</span>
        <Image src={BinIcon.src} width={'40px'} height={'40px'} alt='' layout='fixed' />
      </button>
    </li>
  );
}

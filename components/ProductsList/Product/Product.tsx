import { ReactElement } from 'react';
import styles from './Product.module.scss';
import Image from 'next/image';
import BinIcon from '../../../public/icons/binIcon.svg';
import { formatCurrency } from '../../../utils/formatNumber';
import { IProductProps } from '../../../types/types';

export default function Product({ id, name, count, price }: IProductProps): ReactElement {
  return (
    <li className={styles.productContainer}>
      <p className={styles.productName}>Lorem ipsum dolor sit amet</p>
      <div className={styles.counter}>
        <button type='button' className={styles.countMinus}>
          - <span className='visually-hidden'>Remove 1 of the item</span>
        </button>
        <label htmlFor='item-count'>
          <span className='visually-hidden'>Count of the item</span>
          <input
            name='item-count'
            autoComplete='off'
            title=''
            type='text'
            className={styles.count}
          />
        </label>
        <button type='button' className={styles.countPlus}>
          + <span className='visually-hidden'>Add 1 of the item</span>
        </button>
      </div>
      <p className={styles.price}>Price: {formatCurrency(123123.12)}</p>
      <button type='button' className={styles.removeButton}>
        <span className='visually-hidden'>Remove item from the basket</span>
        <Image src={BinIcon.src} width={'40px'} height={'40px'} alt='' layout='fixed' />
      </button>
    </li>
  );
}

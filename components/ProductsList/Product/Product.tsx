import { ChangeEvent, KeyboardEvent, ReactElement, useState } from 'react';
import styles from './Product.module.scss';
import Image from 'next/image';
import BinIcon from '../../../public/icons/binIcon.svg';
import { formatCurrency } from '../../../utils/formatNumber';
import { ProductProps } from '../../../types/types';

export default function Product({ id, name, count, price }: ProductProps): ReactElement {
  const [countValue, setCountValue] = useState('1');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountValue(e.target.value);
  };

  const handleCountButtons = (operationType: string) => {
    if (countValue === '0' && operationType === 'decrease') {
      return;
    }
    return operationType === 'increase'
      ? setCountValue(String(Number(countValue) + 1))
      : setCountValue(String(Number(countValue) - 1));
  };

  return (
    <li className={styles.productContainer}>
      <p className={styles.productName}>Lorem ipsum dolor sit amet</p>
      <div className={styles.counter}>
        <button
          type='button'
          className={styles.countMinus}
          onClick={() => handleCountButtons('decrease')}
        >
          - <span className='visually-hidden'>Remove 1 of this item</span>
        </button>
        <label htmlFor='item-count'>
          <span className='visually-hidden'>Count of the item</span>
          <input
            name='item-count'
            autoComplete='off'
            title=''
            type='number'
            value={countValue}
            onChange={(e) => handleInputChange(e)}
            className={styles.count}
          />
        </label>
        <button
          type='button'
          className={styles.countPlus}
          onClick={() => handleCountButtons('increase')}
        >
          + <span className='visually-hidden'>Add 1 of this item</span>
        </button>
      </div>
      <p className={styles.price}>Total: {formatCurrency(123123.12)}</p>
      <button type='button' className={styles.removeButton}>
        <span className='visually-hidden'>Remove item from the basket</span>
        <Image src={BinIcon.src} width={'40px'} height={'40px'} alt='' layout='fixed' />
      </button>
    </li>
  );
}

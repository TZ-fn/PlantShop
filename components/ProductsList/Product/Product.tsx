import { ChangeEvent, MouseEvent, ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { changeQuantity, removeFromBasket } from 'features/basket/basketSlice';
import { ProductProps } from 'types/types';
import ProductMiniature from 'components/elements/ProductMiniature/ProductMiniature';
import formatCurrency from 'utils/formatCurrency';
import styles from './Product.module.scss';

export default function Product({
  id,
  name,
  image,
  count = 1,
  price,
  isInBasket = false,
}: ProductProps): ReactElement {
  const [countValue, setCountValue] = useState(`${count}`);
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (Number(e.target.value) < 10000) {
      setCountValue(String(parseInt(e.target.value, 10)));
      dispatch(changeQuantity({ productId: id, count: Number(e.target.value) }));
    }
  };

  const handleCountButtons = (operationType: string, e: MouseEvent) => {
    e.stopPropagation();

    if (countValue === '0' && operationType === 'decrease') {
      return;
    }

    return operationType === 'increase'
      ? (setCountValue(String(Number(countValue) + 1)),
        dispatch(changeQuantity({ productId: id, count: count + 1 })))
      : (setCountValue(String(Number(countValue) - 1)),
        dispatch(changeQuantity({ productId: id, count: count - 1 })));
  };

  const handleRemovingFromBasket = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(removeFromBasket(id));
  };

  return (
    <li className={isInBasket ? styles.basketProductContainer : styles.productContainer}>
      <ProductMiniature source={image} />
      <Link href={`product/${name.toLocaleLowerCase()}`}>
        <p className={styles.productName}>{name}</p>
      </Link>
      {isInBasket && (
        <div className={styles.counter}>
          <button
            type='button'
            className={styles.countMinus}
            onClick={(e) => handleCountButtons('decrease', e)}
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
              maxLength={4}
            />
          </label>
          <button
            type='button'
            className={styles.countPlus}
            onClick={(e) => handleCountButtons('increase', e)}
          >
            + <span className='visually-hidden'>Add 1 of this item</span>
          </button>
        </div>
      )}
      <p className={styles.price}>
        {isInBasket ? 'Total' : 'Price'}: {formatCurrency(price, 'en-US', count)}
      </p>
      {isInBasket && (
        <button type='button' className={styles.removeButton} onClick={handleRemovingFromBasket}>
          <span className='visually-hidden'>Remove item from the basket</span>
          <Image
            src='/icons/binIcon.svg'
            width={'40px'}
            height={'40px'}
            alt='Bin icon'
            layout='fixed'
          />
        </button>
      )}
    </li>
  );
}

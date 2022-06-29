import { ReactElement } from 'react';
import styles from './WishlistProduct.module.scss';
import Image from 'next/image';
import BinIcon from 'public/icons/binIcon.svg';
import ProductMiniature from 'components/elements/ProductMiniature/ProductMiniature';
import { formatCurrency } from 'utils/formatCurrency';
import { ProductProps } from 'types/types';

export default function WishlistProduct({ name, image, price }: ProductProps): ReactElement {
  return (
    <li className={styles.productContainer}>
      <ProductMiniature source={image} />
      <p className={styles.productName}>{name}</p>
      <p className={styles.price}>Price: {formatCurrency(price)}</p>
      <button type='button' className={styles.removeButton}>
        <span className='visually-hidden'>Remove item from the wishlist</span>
        <Image src={BinIcon.src} width={'40px'} height={'40px'} alt='' layout='fixed' />
      </button>
    </li>
  );
}

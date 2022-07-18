import Image from 'next/image';
import { Plant } from 'types/types';
import { formatCurrency } from 'utils/formatCurrency';
import styles from './ItemView.module.scss';

export default function ItemView({ id, name, image, description, price }: Plant) {
  return (
    <div className={styles.itemContainer}>
      <h2 className={styles.sectionHeader}>{name}</h2>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={300}
          height={400}
          src={image}
          alt=''
          layout='responsive'
        />
      </div>
      <p>{description}</p>
      <p>{formatCurrency(price)}</p>
    </div>
  );
}

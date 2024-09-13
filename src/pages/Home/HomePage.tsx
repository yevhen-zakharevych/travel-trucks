import { Link } from 'react-router-dom';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper + ' container'}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <Link className={styles.link + ' button'} to="/catalog">
          View Now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;

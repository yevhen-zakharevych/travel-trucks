import { useId } from 'react';
import Icon from '../../ui/Icon/Icon';

import styles from './Location.module.scss';

function Location() {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.title}>
        Location
      </label>
      <div className={styles.formControl}>
        <Icon id="map" />
        <input
          id={id}
          className={styles.input}
          type="text"
          placeholder="City"
        />
      </div>
    </div>
  );
}

export default Location;

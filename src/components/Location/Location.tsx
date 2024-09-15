import { useId } from 'react';
import Icon from '../../ui/Icon/Icon';

import styles from './Location.module.scss';
import { useAppDispatch } from '../../hooks';
import { changeLocation, selectLocation } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';

function Location() {
  const id = useId();
  const dispatch = useAppDispatch();

  const onLocationChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch(changeLocation(value));
  };

  const location = useSelector(selectLocation);

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
          value={location}
          onInput={onLocationChanged}
        />
      </div>
    </div>
  );
}

export default Location;

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCampers } from '../../redux/campersOps';
import {
  selectCampersLength,
  selectError,
  selectFilteredCampers,
  selectLoading,
  selectPage,
  selectTotal,
  setPage,
} from '../../redux/campersSlice';
import Card from '../Card/Card';

import styles from './CampersList.module.scss';

function CampersList() {
  const dispatch = useAppDispatch();
  const campers = useAppSelector(selectFilteredCampers);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const total = useAppSelector(selectTotal);
  const page = useAppSelector(selectPage);
  const loadedCampersLength = useAppSelector(selectCampersLength);

  const loadMore = () => {
    const newPage = page + 1;

    dispatch(setPage(newPage));
    dispatch(fetchCampers({ limit: 4, page: newPage }));
  };

  return (
    <div className={styles.wrapper}>
      {error && <div className={styles.error}>{error}</div>}
      {campers.map(camper => (
        <Card key={camper.id} camper={camper} />
      ))}

      {loading && <div className={styles.loader + ' loader'}></div>}

      {total > loadedCampersLength && (
        <button
          className={styles.more + ' button-secondary'}
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default CampersList;

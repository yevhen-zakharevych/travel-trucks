import { useAppSelector } from '../../hooks';
import { selectCampers, selectLoading } from '../../redux/campersSlice';
import Card from '../Card/Card';

import styles from './CampersList.module.scss';

function CampersList() {
  const campers = useAppSelector(selectCampers);
  const loading = useAppSelector(selectLoading);

  return (
    <div className={styles.wrapper}>
      {loading && <div className={styles.loader + ' loader'}></div>}
      {campers.map(camper => (
        <Card key={camper.id} camper={camper} />
      ))}
    </div>
  );
}

export default CampersList;

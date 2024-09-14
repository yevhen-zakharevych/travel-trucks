import { useEffect } from 'react';

import { fetchCampers } from '../../redux/campersOps';
import { useAppDispatch } from '../../hooks';

import styles from './CatalogPage.module.scss';
import Filters from '../../components/Filters/Filters';
import CampersList from '../../components/CampersList/CampersList';

function CatalogPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={styles.wrapper + ' container'}>
      <Filters />
      <CampersList />
    </div>
  );
}

export default CatalogPage;

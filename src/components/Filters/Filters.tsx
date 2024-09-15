import { useSelector } from 'react-redux';
import { changeFilter, selectFilters } from '../../redux/filtersSlice';
import Filter from '../../ui/Filter/Filter';
import Location from '../Location/Location';

import styles from './Filters.module.scss';
import { useAppDispatch } from '../../hooks';
import { Form } from '../../types';
import { fetchCampers } from '../../redux/campersOps';

function Filters() {
  const dispatch = useAppDispatch();

  const onFilterChanged = (key: string, value: boolean) => {
    dispatch(changeFilter({ [key]: value }));
  };

  const onFormFilterChanged = (form: Form) => {
    if (filters.form === form) {
      dispatch(changeFilter({ form: null }));
    } else {
      dispatch(changeFilter({ form }));
    }
  };

  const filters = useSelector(selectFilters);

  const onSearchClick = () => {
    dispatch(fetchCampers());
  };

  return (
    <div className={styles.wrapper}>
      <Location />

      <div className={styles.title}>Filters</div>

      <h3 className={styles.subtitle}>Vehicle equipment</h3>

      <div className={styles.filters}>
        <Filter
          icon="wind"
          text="AC"
          active={filters.AC}
          onFilter={() => onFilterChanged('AC', !filters.AC)}
        />
        <Filter
          icon="diagram"
          text="Automatic"
          active={filters.automatic}
          onFilter={() => onFilterChanged('automatic', !filters.automatic)}
        />
        <Filter
          icon="cup-hot"
          text="Kitchen"
          active={filters.kitchen}
          onFilter={() => onFilterChanged('kitchen', !filters.kitchen)}
        />
        <Filter
          icon="tv"
          text="TV"
          active={filters.TV}
          onFilter={() => onFilterChanged('TV', !filters.TV)}
        />
        <Filter
          icon="droplet"
          text="Bathroom"
          active={filters.bathroom}
          onFilter={() => onFilterChanged('bathroom', !filters.bathroom)}
        />
      </div>

      <h3 className={styles.subtitle}>Vehicle Type</h3>

      <div className={styles.filters}>
        <Filter
          icon="van"
          text="Van"
          active={filters.form === Form.PanelTruck}
          onFilter={() => onFormFilterChanged(Form.PanelTruck)}
        />
        <Filter
          icon="fully-integrated"
          text="Fully Integrated"
          active={filters.form === Form.FullyIntegrated}
          onFilter={() => onFormFilterChanged(Form.FullyIntegrated)}
        />
        <Filter
          icon="alcove"
          text="Alcove"
          active={filters.form === Form.Alcove}
          onFilter={() => onFormFilterChanged(Form.Alcove)}
        />
      </div>

      <div className={styles.actions}></div>
      <button className={styles.button + ' button'} onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
}

export default Filters;

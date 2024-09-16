import { useOutletContext } from 'react-router-dom';
import Badge from '../../ui/Badge/Badge';
import { Camper } from '../../types';
import { capitalizeFirstLetter } from '../../shared';

import style from './Features.module.scss';

function Features() {
  const camper: Camper = useOutletContext();

  return (
    <div className={style.wrapper}>
      <div className={style.badges}>
        <Badge icon="diagram" text={camper.transmission} />
        <Badge icon="fuel" text={camper.engine} />
        {camper.kitchen && <Badge icon="cup-hot" text="Kitchen" />}
        {camper.AC && <Badge icon="wind" text="AC" />}
        {camper.TV && <Badge icon="tv" text="TV" />}
        {camper.bathroom && <Badge icon="droplet" text="Bathroom" />}
      </div>

      <div className={style.details}>
        <h3 className={style.title}>Vehicle details</h3>
        <hr className={style.separator} />

        <div className={style.description}>
          <div className={style.text}>Form</div>
          <div className={style.text}>{capitalizeFirstLetter(camper.form)}</div>
        </div>
        <div className={style.description}>
          <div className={style.text}>Length</div>
          <div className={style.text}>{camper.length}</div>
        </div>
        <div className={style.description}>
          <div className={style.text}>Width</div>
          <div className={style.text}>{camper.width}</div>
        </div>
        <div className={style.description}>
          <div className={style.text}>Height</div>
          <div className={style.text}>{camper.height}</div>
        </div>
        <div className={style.description}>
          <div className={style.text}>Tank</div>
          <div className={style.text}>{camper.tank}</div>
        </div>
        <div className={style.description}>
          <div className={style.text}>Consumption</div>
          <div className={style.text}>{camper.consumption}</div>
        </div>
      </div>
    </div>
  );
}

export default Features;

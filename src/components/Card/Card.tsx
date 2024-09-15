import { Link } from 'react-router-dom';

import { Camper } from '../../types';
import Badge from '../../ui/Badge/Badge';
import Icon from '../../ui/Icon/Icon';
import style from './Card.module.scss';

function Card({ camper }: { camper: Camper }) {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={camper.gallery[0].original} alt={camper.name} />
      </div>

      <div className={style.description}>
        <header className={style.header}>
          <h3 className={style.title}>{camper.name}</h3>
          <p className={style.price}> €{camper.price}</p>
          <button className={style.buttonFavorite}>
            <Icon id="heart" size="24" />
          </button>
        </header>

        <div className={style.contentRow}>
          <div className={style.review}>
            <Icon id="star" size="16" />
            <span className={style.rating}>{camper.rating}</span>
            <span className={style.reviews}>
              ({camper.reviews.length} Reviews)
            </span>
          </div>

          <div className={style.location}>
            <Icon id="map" size="16" />
            {camper.location}
          </div>
        </div>

        <p className={style.descriptionText}>{camper.description}</p>

        <div className={style.badges}>
          <Badge icon="diagram" text={camper.transmission} />
          <Badge icon="fuel" text={camper.engine} />
          {camper.kitchen && <Badge icon="cup-hot" text="Kitchen" />}
          {camper.AC && <Badge icon="wind" text="AC" />}
          {camper.TV && <Badge icon="tv" text="TV" />}
          {camper.bathroom && <Badge icon="droplet" text="Bathroom" />}
        </div>

        <div className={style.actions}>
          <Link
            className={style.button + ' button'}
            to={`/details/${camper.id}`}
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

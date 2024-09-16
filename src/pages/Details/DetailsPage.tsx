import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { Camper } from '../../types';
import { getCamperDetails } from '../../api/api';
import Icon from '../../ui/Icon/Icon';
import { formatPrice } from '../../shared';

import style from './DetailsPage.module.scss';
import BookingForm from '../../components/BookingForm/BookingForm';

const buildLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(style.tab, isActive && style.active);

function DetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState<Camper | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchCast = async () => {
      const camper = await getCamperDetails(id);

      setCamper(camper);
    };

    fetchCast();
  }, [id]);

  return (
    <div className={style.wrapper + ' container'}>
      {!camper && <div className={style.loader + ' loader'}></div>}

      {camper && (
        <>
          <h3 className={style.title}>{camper?.name}</h3>

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

          <p className={style.price}> €{formatPrice(camper.price)}</p>

          <div className={style.images}>
            {camper.gallery.map(image => (
              <div className={style.image} key={image.original}>
                <img src={image.original} alt={camper.name} />
              </div>
            ))}
          </div>

          <p className={style.descriptionText}>{camper.description}</p>

          <div className={style.bottomBlock}>
            <div className={style.tabs}>
              <NavLink to="features" className={buildLinkClass}>
                Features
              </NavLink>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </div>

            <div className={style.content}>
              <div className={style.tabContent}>
                <Outlet />
              </div>

              <div className={style.bookingForm}>
                <BookingForm />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailsPage;

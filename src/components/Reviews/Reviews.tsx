import { useOutletContext } from 'react-router-dom';
import { Camper } from '../../types';

import styles from './Reviews.module.scss';
import Icon from '../../ui/Icon/Icon';

function Reviews() {
  const camper: Camper = useOutletContext();

  return (
    <div className={styles.wrapper}>
      {camper.reviews.map(review => (
        <div className={styles.review} key={review.reviewer_name}>
          <header className={styles.header}>
            <div className={styles.avatar}>{review.reviewer_name[0]}</div>
            <div className={styles.rating}>
              <h4 className={styles.title}>{review.reviewer_name}</h4>
              {[...Array(5)].map((_, starIndex) => (
                <Icon
                  id="star"
                  key={`star-${review.reviewer_name}-${starIndex}`}
                  size="16"
                  color={
                    starIndex < review.reviewer_rating
                      ? 'var(--tt-color-rating)'
                      : 'var(--tt-color-badges)'
                  }
                />
              ))}
            </div>
          </header>

          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;

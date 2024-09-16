import { capitalizeFirstLetter } from '../../shared';
import Icon from '../Icon/Icon';
import style from './Badge.module.scss';

function Badge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className={style.wrapper}>
      <Icon id={icon} size="20" />
      <span className={style.text}>{capitalizeFirstLetter(text)}</span>
    </div>
  );
}

export default Badge;

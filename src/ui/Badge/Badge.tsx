import Icon from '../Icon/Icon';
import style from './Badge.module.scss';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Badge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className={style.wrapper}>
      <Icon id={icon} size="20" />
      <span className={style.text}>{capitalizeFirstLetter(text)}</span>
    </div>
  );
}

export default Badge;

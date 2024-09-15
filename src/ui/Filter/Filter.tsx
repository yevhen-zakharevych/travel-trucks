import Icon from '../Icon/Icon';

import style from './Filter.module.scss';

function Filter({
  icon,
  text,
  active = false,
  onFilter,
}: {
  icon: string;
  text: string;
  active?: boolean;
  onFilter?: () => void;
}) {
  return (
    <div
      onClick={onFilter}
      className={style.wrapper + ' ' + (active ? style.active : '')}
    >
      <Icon id={icon} size="32" />
      <span className={style.text}>{text}</span>
    </div>
  );
}

export default Filter;

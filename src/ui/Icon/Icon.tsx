import icons from '../../assets/sprite.svg';

function Icon({
  id,
  size = '20',
  color = 'currentColor',
}: {
  id: string;
  size?: string;
  color?: string;
}) {
  return (
    <svg height={size} width={size} color={color}>
      <use href={`${icons}#${id}`} />
    </svg>
  );
}

export default Icon;

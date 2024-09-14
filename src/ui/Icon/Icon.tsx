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
      <use href={`/src/assets/sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;

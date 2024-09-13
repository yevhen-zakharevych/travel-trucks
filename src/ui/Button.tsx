import styles from './Button.module.scss';

function Button({ children }: { children: string }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;

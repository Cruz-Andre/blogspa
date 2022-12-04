import styles from './Button.module.css'

export default function Button({ children, sizeOfButton }) {
  return (
    <button className={`${styles.botao} ${styles[sizeOfButton]}`}>
      {children}
    </button>
  )
}
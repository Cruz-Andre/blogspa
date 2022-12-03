import HeaderLink from '../HeaderLink/HeaderLink'
import styles from './Header.module.css'

export default function Header() {

  return (
    <header>
      <nav className={styles.navegacao}>
        <HeaderLink to='/'>Início</HeaderLink>
        <HeaderLink to='/about'>Sobre Mim</HeaderLink>
      </nav>
    </header>
  )
}
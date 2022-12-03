import { NavLink } from 'react-router-dom'
import styles from './HeaderLink.module.css'

export default function HeaderLink({ children, to }) {

  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ''}
      `}
      to={to}
      
      //Colocar END caso aconteça dos dois links ficarem ativos ao mesmo tempo quando estiver na rota inicial!
      //Provavelmente não seja mais necessário
      end
    >
      {children}
    </NavLink>
  )
}

/* usando Link ou inves de NavLink

import { Link, useLocation } from 'react-router-dom'
import styles from './HeaderLink.module.css'

export default function HeaderLink({children, to}) {
  
  const localizacao = useLocation()

  console.log(localizacao)

  return (
    <Link
      className={`
      ${styles.link} 
      ${localizacao.pathname === to ? styles.linkDestacado : ''}`} 
      to={to}
    >
      {children}
    </Link>
  )
}

*/



import Banner from 'components/Banner/Banner'
import { Outlet } from 'react-router-dom'

export default function StandardPage({children}) {
  return (
    <main>
      <Banner />
      
      {/* Redenrizar conteúdo da rota aqui... */}
      <Outlet />
      {children}
    </main>
  )
}
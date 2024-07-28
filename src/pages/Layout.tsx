import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gradient-to-t to-[#11253d] via-[#0f1729] from-[#0f1729] h-screen'>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout
import { Outlet } from "react-router"
import Header from "./components/header/ui/Header"
import Sidebar from "./components/sidebar/ui/Sidebar"

const LayoutApp = () => {

  return (
    <>

    <div className='size-full fixed z-10'>
        <Header/>
        <Sidebar/>
    </div>

    <div className='w-full h-full pl-80 pt-20'>
        <Outlet/>
    </div>

    </>

  )
 
}

export default LayoutApp
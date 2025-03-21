import { Outlet } from "react-router"
import Header from "./components/header/ui/Header"

const LayoutApp = () => {

  return (
    <>

    <div className='size-full fixed z-10'>
        <Header/>
    </div>

    <div className='w-full h-full'>
        <Outlet/>
    </div>

    </>

  )
 
}

export default LayoutApp
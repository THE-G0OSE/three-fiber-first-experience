import { Route, Routes } from "react-router"
import HomePage from "@/pages-api/home-page/ui/HomePage"
import LayoutApp from "@/widgets/layout/layout-app/ui/LayoutApp"
import StoreProvider from "@/app/provider/store/ui/StoreProvider"

const App = () => {

  return (
    <StoreProvider>
    <div className='w-screen h-screen'>

      <Routes>
        <Route element={<LayoutApp/>}>
        <Route path='/' element={<HomePage/>} />
        </Route>
      </Routes>

    </div>
    </StoreProvider>

  )

}

export default App
import { enumRotateDirection } from '../../../../../../../feature/rotation/model/RotationSlice'
import Slider from '../../../../../../../shared/ui/slider/ui/Slider'

const Header = () => {

  return (
    
    <div className='w-screen h-20 bg-slate-800 flex justify-around items-center'>

      <div className='flex items-center gap-4'>X: <Slider type={'rotation'} property={enumRotateDirection.X}/></div>
      <div className='flex items-center gap-4'>Y: <Slider type={'rotation'} property={enumRotateDirection.Y}/></div>
      <div className='flex items-center gap-4'>Z: <Slider type={'rotation'} property={enumRotateDirection.Z}/></div>
        
    </div>

  )

}

export default Header
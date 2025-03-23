import { enumType } from '@/shared/model'
import Slider, { enumAxis } from '@/shared/ui/slider/ui/Slider'
const Header = () => {

  return (
    
    <div className='w-screen h-20 bg-slate-800 flex justify-around items-center'>

      <div className='flex items-center gap-4'>X: <Slider type={'rotation'} property={{axis: enumAxis.X, type: enumType.SLIDER}}/></div>
      <div className='flex items-center gap-4'>Y: <Slider type={'rotation'} property={{axis: enumAxis.Y, type: enumType.SLIDER}}/></div>
      <div className='flex items-center gap-4'>Z: <Slider type={'rotation'} property={{axis: enumAxis.Z, type: enumType.SLIDER}}/></div>
        
    </div>

  )

}

export default Header
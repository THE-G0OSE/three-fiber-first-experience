import { enumType } from "@/shared/model"
import Joystick from "@/shared/ui/joystick/ui/Joystick"
import Slider, { enumAxis } from "@/shared/ui/slider/ui/Slider"

const Sidebar = () => {

  return (

    <div className='w-80 h-screen bg-slate-800 pt-30 flex'>
        <section className='flex flex-col justify-start gap-10 items-center w-full'>
            <Joystick type={'rotation'} props={{type: enumType.DRAG, axis: 'allAxis'}}/>
            <Slider type={'size'} property={{type: enumType.SLIDER, axis: enumAxis.X}}/>
            <Slider type={'size'} property={{type: enumType.SLIDER, axis: enumAxis.Y}}/>
            <Slider type={'size'} property={{type: enumType.SLIDER, axis: enumAxis.Z}}/>
        </section>
    </div>

  )

}

export default Sidebar
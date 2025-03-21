import {motion, useMotionValue} from 'motion/react'
import { enumRotateDirection, setRotation } from "../../../../feature/rotation/model/RotationSlice"
import { useRef } from 'react'
import { useAppDispatch } from '../../../lib/hooks'

interface IProps {
    type: 'rotation'
    property: enumRotateDirection     
}

const Slider: React.FC<IProps> = ({type, property}) => {

    const dispatch = useAppDispatch()

    const x = useMotionValue(0)

    x.on('change', () => {
        dispatch(setRotation({direction: property, value: x.get()}))
    })

    const containerRef = useRef<HTMLDivElement | null>(null)


  return (

        <motion.section className='w-80 rounded-full h-8 flex justify-start items-center bg-slate-700' ref={containerRef}>
            <motion.div
                drag='x' 
                dragConstraints={containerRef}
                style={{x: x}}
                className='size-8 rounded-full bg-slate-600'
            ></motion.div> 
        </motion.section>

  )

}

export default Slider
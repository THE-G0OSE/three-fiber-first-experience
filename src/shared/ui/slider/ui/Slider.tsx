import {motion, useMotionValue} from 'motion/react'
import { setRotation } from "@/feature/rotation/model/RotationSlice"
import { useRef } from 'react'
import { useAppDispatch } from '@/shared/lib/hooks'
import { setSize } from '@/feature/size'
import { enumType } from '@/shared/model'

export enum enumAxis {
    X = 'x',
    Y = 'y',
    Z = 'z',
}

interface IProps {
    type: 'rotation' | 'size'
    property: { 
        axis: enumAxis,
        type: enumType,
    }
}

const Slider: React.FC<IProps> = ({type, property}) => {

    const dispatch = useAppDispatch()

    const x = useMotionValue(0)

    x.on('change', () => {
        switch(type) {
            case 'rotation':
                dispatch(setRotation({axis: property.axis, type: property.type, value: x.get()}))
                break;
            case 'size':
                dispatch(setSize({axis: property.axis,value: x.get(), type: property.type}))
        }
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
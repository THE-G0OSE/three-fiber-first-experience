import { addRotation, setRotation } from '@/feature';
import { useAppDispatch } from '@/shared/lib';
import { enumType } from '@/shared/model';
import {motion, useMotionValue} from 'motion/react'
import { useRef } from 'react';
import { enumAxis } from '../../slider';

interface IProps {
  type: 'rotation';
  props: {
    type: enumType,
    axis: enumAxis | 'allAxis',
  }
}

const Joystick: React.FC<IProps> = ({type, props}) => {

  const x = useMotionValue(0)
  
   const y = useMotionValue(0)

  const dispatch = useAppDispatch()

  const dragHandler = () => {
    if(props.axis === 'allAxis') {
      dispatch(addRotation({type: props.type, axis: enumAxis.X, value: y.get() / 40}))
      dispatch(addRotation({type: props.type, axis: enumAxis.Y, value: x.get() / -40}))
    } else {
    }
  }

  const containerRef = useRef<HTMLDivElement | null>(null)

  return (

    <motion.div className='rounded-full size-40 flex justify-center items-center bg-slate-600'
      ref={containerRef} 
    >
      <motion.div className='rounded-full size-12 bg-slate-700'
        style={{x, y}}
        drag
        dragSnapToOrigin
        dragConstraints={containerRef}
        dragElastic={.1}
        onDrag={dragHandler}
      />
    </motion.div>

  )

}

export default Joystick
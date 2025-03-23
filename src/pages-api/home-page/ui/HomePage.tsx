import {Canvas} from 'react-three-fiber'
import SceneApp from '@/widgets/scenes/ui/SceneApp'

const HomePage = () => {

  return (
    <Canvas className='w-screen h-screen'>
        <SceneApp/>
    </Canvas>
  )

}

export default HomePage
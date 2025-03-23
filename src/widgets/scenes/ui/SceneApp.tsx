import { useAppSelector } from "@/shared/lib/hooks"
import { selectRotation } from "@/feature/rotation/model/RotationSlice"
import { selectSize } from "@/feature/size"

const SceneApp = () => {

  const rotation = useAppSelector(selectRotation)
  const size = useAppSelector(selectSize)

  return (
    
    <>
    <pointLight position={[0, 10, 20]} intensity={1000}/>
    <mesh rotation={[(rotation.slider.x + rotation.drag.x) / 100, (rotation.slider.y + rotation.drag.y) / 100, (rotation.slider.z + rotation.drag.z) / 100]}>
        <boxGeometry attach='geometry' args={[size.slider.x / 100 + .1, size.slider.y / 100 + .1, size.slider.z / 100 + .1]}/>
        <meshStandardMaterial attach='material' color='#6be092'/>
    </mesh>
    </>

  )

}

export default SceneApp
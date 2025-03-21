import { useAppSelector } from "../../../shared/lib/hooks"
import { selectRotation } from "../../../feature/rotation/model/RotationSlice"

const SceneApp = () => {

  const rotation = useAppSelector(selectRotation)

  return (
    
    <>
    <pointLight position={[0, 10, 20]} intensity={1000}/>
    <mesh rotation={[rotation.rotationX / 100, rotation.rotationY / 100, rotation.rotationZ / 100]}>
        <boxGeometry attach='geometry' args={[2, 1, 1]}/>
        <meshStandardMaterial attach='material' color='#6be092'/>
    </mesh>
    </>

  )

}

export default SceneApp
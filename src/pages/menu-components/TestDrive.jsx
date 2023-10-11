import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div className="test-drive">
      
    </div>
    
  )
}

export default function TestDrive() {
  const testDrive = useLoaderData()
  return (
    <>
      {
      testDrive
      } 
    </>
  )
}
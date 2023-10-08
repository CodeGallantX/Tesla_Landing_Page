import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div className="used-inventory">
      
    </div>
  )
}

export default function UsedInventory() {
  const usedInventory = useLoaderData()
  return (
    <>
      {
      usedInventory
      } 
    </>
    
  )
}
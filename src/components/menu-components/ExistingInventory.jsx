import { useLoaderData } from "react-router-dom";

export function loader() {
  return (
    <div className="existing-inventory">
      <div div id="player"></div>
    </div>
  )
}

export default function ExistingInventory() {
 
  const existingInventory = useLoaderData()

  return (
    <>
      {existingInventory}
    </>
  )

}
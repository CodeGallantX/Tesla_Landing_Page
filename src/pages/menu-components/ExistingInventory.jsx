import { useLoaderData } from "react-router-dom";

export function loader() {
  return (
    <div className="existing-inventory">
      <h1>Hello</h1>
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
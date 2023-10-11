import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div className="shop">
      
    </div>
  )
}

export default function Shop() {
  const shop = useLoaderData()
  return (
    <>
      {shop}
    </>
  )
}
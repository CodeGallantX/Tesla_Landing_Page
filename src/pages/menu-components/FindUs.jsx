import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div className="find-us">
      
    </div>
  )
}

export default function FindUs() {
  const findUs = useLoaderData()
  return (
    <>
      {findUs}
    </>
  )
}
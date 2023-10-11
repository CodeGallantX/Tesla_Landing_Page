import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    
    <div className="support">
      
    </div>
  )
}

export default function Support() {
  const support = useLoaderData()
  return (
    <>
      {support}
    </>
  )
}
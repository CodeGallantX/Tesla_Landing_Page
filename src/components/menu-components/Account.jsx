import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div className="account">
      
    </div>

  )
}

export default function Account() {
  const account = useLoaderData()
  return (
    <>
      {account}
    </>
  )
}
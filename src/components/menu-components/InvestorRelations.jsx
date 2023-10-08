import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div className="investor-relations">
      
    </div>

  )
}

export default function InvestorRelations() {
  const investorRelations = useLoaderData()
  return (
    <>
      {investorRelations}
    </>
  )
}
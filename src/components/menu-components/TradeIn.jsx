import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div className="trade-in">
      
    </div>
    
  )
}

export default function TradeIn() {
  const tradeIn = useLoaderData()

  return (
    <>
      {tradeIn}
    </>
  )
}
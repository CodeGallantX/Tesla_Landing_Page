import InnerSection from "./InnerSections.jsx"
import { useLoaderData } from "react-router-dom"

export function loader() {
  return (
    <div>
      <InnerSection />
    </div>

  )
}

export default function Home() {
  const home = useLoaderData()
  return (
    <>
      {home}
    </>
  )
}
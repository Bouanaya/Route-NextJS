import Link from "next/link"

 

export default  async function page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
const afficherData = data.map(
    (id:string , name:string) => (
        <div className="" key={id}>
            <Link href={`product/${id}`}>{name}</Link>
            <h1></h1>

        </div>
    )
)
  
    
  return (
    <div>
        
      {afficherData}
    </div>
  )
}

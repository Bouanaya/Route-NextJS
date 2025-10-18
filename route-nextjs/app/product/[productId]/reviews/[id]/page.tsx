export default async function page({params}:{params:{id:string}} 

) {
    const {id} = await params
   return(
    <div className="">
        <h1>{id}</h1>
    </div>
   ) 
}
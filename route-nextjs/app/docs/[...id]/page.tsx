 

export default async function page(
    {params}:{params:Promise <{id : string[]}>}
) {
        const {id} = await params
        if(id.length >= 2
        ){
            return <div>
                <h1>{id}</h1>
            </div>
        }

        

  
   
  
}

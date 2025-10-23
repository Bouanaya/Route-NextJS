 

export default async function page({
  params,
}: {
  params: Promise<{ electroId: string }>
}) {
 
    const param = (await params).electroId
    return <p>hello {param}</p>
    
}
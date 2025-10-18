import Link from "next/link";

export default async function UserPage({ params }: { params: { productId: string } }) {
  const { productId } = params;
  return <Link href={`product/${productId}/reviews/${productId}`} >Profil de lutilisateur {productId}</Link>;
}

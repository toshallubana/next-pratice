// dynamic routes

import { Metadata} from 'next';
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: string
  }
}

// dynamic meta data in next js
export const generateMetadata = async ({params}: Props) : Promise<Metadata> => {

  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`)
    }, 100);
  })

  return {
    title: `Product ${title}`
  }
}


const ProductDetails = ({ params }: Props ) => {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return <h1>Product {params.productId}</h1>;
};
export default ProductDetails;

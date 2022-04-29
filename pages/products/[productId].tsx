// SG - static generation + REVALIDATE + isFallback


import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ProductType } from "../../types/types";

const Product = ( {product} : { product: ProductType }) => {

    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </>
    )

}


export const getStaticProps: GetStaticProps = async(context) => {

    const { params } = context;

    const id = params?.productId;

    if (!id) {
        return {
            notFound: true,
        }
    }

    const res = await fetch(`http://localhost:4000/products/${id}`);
    const product = await res.json();

    return {
        props: { product },
        revalidate: 10,
    }
}


export const getStaticPaths: GetStaticPaths = async() => {

    const res = await fetch(`http://localhost:4000/products`);
    const products: ProductType[] = await res.json();

    const paths = products.map((item) => ({ params: { productId: item.id.toString() } }))

    return {
        paths,
        fallback: true,
    }
} 

export default Product;
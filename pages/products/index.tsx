// CSS MODULES

import { GetStaticProps } from "next";
import Link from "next/link";
import { ProductType } from "../../types/types";

import styles from './product.module.scss';

const ProductList = ({products} : {products: ProductType[]}) => {
    const productList = products.map((item) => <li key={item.id}>  <Link href={`products/${item.id}`}><a><h2> {item.title} {item.price}</h2></a></Link> </li>)
    return (
        <>
            <h1>ProductList</h1>
            <ul className={styles.products}>
                {productList}
            </ul>
        </>
    )
};


export const getStaticProps: GetStaticProps = async() => {

    const res = await fetch('http://localhost:4000/products');

    const products = await res.json();

    return {
        props: {
            products,
        }
    }

}

export default ProductList;
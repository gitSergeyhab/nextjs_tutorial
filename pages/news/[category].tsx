import { GetServerSideProps } from "next";
import { NewsType } from "types/types";

const NewsByCategory = ({ category, news } : { category: string, news: NewsType[] }) => {

    const newsList = news.map(({ title, id }) => <li key={id} > {id}. {title} </li>)
    return (
        <>
            <h1>News in category: {category}</h1>
            <ul>{newsList}</ul>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const { query } = context;

    const { category } = query;

    if (!category) {
        return {
            props: {
                news: [],
                category: '',
            }
        }
    }

    const res = await fetch(`http://localhost:4000/news?category=${category}`);

    const news = await res.json();

    return {
        props: {
            news, category
        }
    }
} 

export default NewsByCategory;
import { GetServerSideProps } from "next";
import { NewsType } from "../../types/types"

const NewsList = ({news} : {news: NewsType[]}) => {
    


    const newsList = news.map(({ title, category, id }) => <li key={id}> {title} | {category}</li>);

    return (
        <>
            <h1>NewsList</h1>
            <ul>
                { newsList }
            </ul>
        </>
    )
}


export default NewsList;


export const getServerSideProps: GetServerSideProps = async () => {

    
    const res = await fetch('http://localhost:4000/news');

    const news = await res.json();

    return {
        props: { news }
    };
};
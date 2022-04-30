// SSR
// styled-components

import { GetServerSideProps } from "next";
import styled from "styled-components";
import { NewsType } from "../../types/types"


const Title = styled.h1`
font-size: 40px;
color: ${({ theme }) => theme.colors.blue};
text-transform: uppercase;
`

const NewsList = ({news} : {news: NewsType[]}) => {
    


    const newsList = news.map(({ title, category, id }) => <li key={id}> {title} | {category}</li>);

    return (
        <>
            <Title>NewsList</Title>
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
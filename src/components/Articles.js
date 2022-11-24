import { useEffect, useState } from 'react';
import Article from './Article';

//import articleItems from '../data/articles.json'

function Articles() {
    const [articleItems, setArticleItems] = useState([])
    useEffect(async () => {
        const res = await fetch("http://127.0.0.1:2000/articles/")//.catch()
        const jsonRes = await res.json() 
        setArticleItems(jsonRes.data)
    }, [])

    //console.log(articleItems2)
    return (
        <>
            {articleItems.map((articleData) => (
                <Article articleData={articleData} />
            ))}
        </>
    )
}

export default Articles;
import { useEffect, useState } from 'react';
import Article from './Article';

function Articles() {
    const [articleItems, setArticleItems] = useState(null)
    useEffect(() => {
        fetch("http://127.0.0.1:2000/articles/637d05b707c7f39f71f3bc42").then((res) => {
            res.json().then((jsonRes) => {
                setArticleItems(jsonRes.data)
                console.log(jsonRes)
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>

            {
                articleItems ?
                    articleItems.map((articleData) => (
                        <Article articleData={articleData} />
                    ))
                    :
                    "Loading..."
            }
        </>
    )
}

export default Articles;
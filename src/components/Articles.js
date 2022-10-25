import articleItems from '../data/articles.json';
import Article from './Article';

function Articles() {
    return (
        <>
            {articleItems.map((articleData) => (
                <Article articleData={articleData} />
            ))}
        </>
    )
}

export default Articles;
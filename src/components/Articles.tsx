import { useEffect, useState } from 'react';
import ArticleItem from './ArticleItem';

export interface ArticleImage {
  _id: string;
  imageURL: string;
  thumbnail: string;
}

export interface Article {
  _id: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  images: ArticleImage[];
}

function Articles() {
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  useEffect(() => {
    fetch('http://127.0.0.1:2000/articles/637d05b707c7f39f71f3bc42')
      .then((res) => {
        res.json().then((jsonRes) => {
          setArticleItems(jsonRes.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {articleItems.length > 0
        ? articleItems.map((articleData) => (
            <ArticleItem key={articleData._id} articleData={articleData} />
          ))
        : 'Loading...'}
    </>
  );
}

export default Articles;

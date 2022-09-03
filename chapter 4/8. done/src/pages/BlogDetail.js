import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {

    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, SetLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(function () {


        async function getArticle() {
            const reaquest = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if (!reaquest.ok) {
                return setNotFound(true);
            }

            const response = await reaquest.json();

            document.title = response.title;
            setArticle(response);
            SetLoading(false);
        }

        getArticle();

    }, [params]);

    if (notFound) {
        return <h1>Blog tidak ditemukan </h1>;
    }

    return (

        <section className='section' >
            {loading ? (
                <i>Sedang loading</i>
            ) : (

                <article className='articles'>
                    <h1 className='article-title'>{article.title}</h1>
                    <time className='article-time'>{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <img className='article-image' src={article.imageUrl} alt={article.title} />
                    <p className='article-summary' >{article.summary}</p>
                    <p className='article-source'>
                        Source:
                        <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a>
                    </p>
                </article>

            )}

        </section>

    );
}
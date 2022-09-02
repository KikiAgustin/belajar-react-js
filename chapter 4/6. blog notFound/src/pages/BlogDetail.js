import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

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

            setArticle(response);
            SetLoading(false);
        }

        getArticle();

    }, [params]);

    if (notFound) {
        return <h1>Blog tidak ditemukan </h1>;
    }

    return (

        <section>
            {loading ? (
                <i>Sedang loading</i>
            ) : (

                <article>
                    <h1>{article.title}</h1>
                    <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <img src={article.imageUrl} alt={article.title} />
                    <p>{article.summary}</p>
                    <p>
                        Source:
                        <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a>
                    </p>
                </article>

            )}

        </section>

    );
}
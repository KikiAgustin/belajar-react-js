import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {

        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, [])

    return (
        <section>
            <h1>Blog</h1>
            <p>Berikut ini adalah beberapa tulisan saya, (tapi bo'ong): </p>

            {loading && <i>Sedang mengambil data</i>}
            {!loading &&

                <div>
                    {articles.map(function (article) {
                        return (
                            <section>
                                <article key={article.id} >
                                    <h4> <Link to={`/blog/${article.id}`} >{article.title}</Link></h4>
                                    <time>
                                        {new Date(article.publishedAt).toLocaleDateString()}
                                    </time>
                                </article>
                            </section>
                        );
                    })}
                </div>

            }

        </section>
    );
}
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {

        document.title = "Blog";
        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');

            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, [])

    return (
        <section className="section" >
            <h1 className="section-title" >Blog</h1>
            <p className="section-description">Berikut ini adalah beberapa tulisan saya, (tapi bo'ong): </p>

            {loading && <i>Sedang mengambil data</i>}
            {!loading &&

                <div>
                    {articles.map(function (article) {
                        return (
                            <section className='articles'>
                                <article className='article' key={article.id} >
                                    <h4 className='article-title' > <Link to={`/blog/${article.id}`} >{article.title}</Link></h4>
                                    <time className='article-time'>
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
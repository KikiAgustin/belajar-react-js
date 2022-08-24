const root = document.querySelector('#root');

function App() {

    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(function () {
        async function getData() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json();

            setNews(response);
            setLoading(false);
        }
        getData();
    }, []);

    return (
        <>
            <h1>Fetch Data</h1>
            {loading && <i>Loading data ....</i>}
            {!loading && (
                <ul>
                    {news.map(function (item) {
                        console.log(item);
                        return <li key={item.id} >{item.title}</li>
                    })}
                </ul>
            )}
        </>
    );
}

ReactDOM.render(<App />, root);



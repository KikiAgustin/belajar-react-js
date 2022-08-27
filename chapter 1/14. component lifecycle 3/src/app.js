const root = document.querySelector('#root');

function App() {
    const [count, setCount] = React.useState(0);
    const [diklik, setDiklik] = React.useState(false);

    React.useEffect(function () {
        console.log('init carousel');

        return function () {
            console.log('destroy carousel');
        }
    });

    return (
        <>
            <h1 id="judul" >Hello ini judul</h1>

            <button
                onClick={function () {
                    setDiklik(true);
                }}
            >Klik aku dong</button>

            <button
                onClick={function () {
                    setCount(count + 1);
                }}
            >Tambah</button>
            <span>Nilai Saat ini {count}</span>
        </>
    );

}

ReactDOM.render(<App />, root);


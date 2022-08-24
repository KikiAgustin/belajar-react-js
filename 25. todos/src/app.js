const root = document.querySelector('#root');

function App() {

    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);

    function getAktivity(event) {
        event.preventDefault();

        setTodos([...todos, activity]);
        setActivity('');
    }

    return (
        <>
            <h1>Aktivitas Harian</h1>

            <form onSubmit={getAktivity} >
                <input
                    type="text"
                    placeholder="Masukan aktivitas"
                    value={activity}
                    onChange={function (event) {
                        setActivity(event.target.value);
                    }}
                />
                <button type="submit">Tambah</button>
            </form>

            <ul>
                {todos.map(function (todo) {
                    return <li key={todo} >{todo}</li>;
                })}
            </ul>
        </>
    )

}

ReactDOM.render(<App />, root);


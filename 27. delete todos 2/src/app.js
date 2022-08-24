const root = document.querySelector('#root');

function App() {

    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);

    function addIdActivity() {
        return Date.now();
    }

    function getAktivity(event) {
        event.preventDefault();

        setTodos([...todos, {
            id: addIdActivity(),
            activity: activity
        }]);
        setActivity('');
    }

    function removeTodo(todoId) {
        const filteredTodo = todos.filter(function (todo) {
            return todo.id !== todoId;
        });

        setTodos(filteredTodo);

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
                    return (
                        <li key={todo.id} >{todo.activity}
                            <button onClick={removeTodo.bind(this, todo.id)} >Hapus</button>
                        </li>

                    );
                })}
            </ul>
        </>
    )

}

ReactDOM.render(<App />, root);


const root = document.querySelector('#root');

function App() {

    const [activity, setActivity] = React.useState('');
    const [edit, setEdit] = React.useState({});
    const [todos, setTodos] = React.useState([]);
    const [message, setMessage] = React.useState('');

    function addIdActivity() {
        return Date.now();
    }

    function saveAktivity(event) {
        event.preventDefault();

        if (!activity) {
            return setMessage('Data tidak boleh kosong!');
        }

        setMessage('');

        if (edit.id) {

            const updateTodo = {
                id: edit.id,
                activity,
            }

            const editTodoIndex = todos.findIndex(function (todo) {
                return todo.id == edit.id;
            });

            const updatedTodo = [...todos];
            updatedTodo[editTodoIndex] = updateTodo;

            setTodos(updatedTodo);
            return cancelEdit();
        }

        setTodos([...todos, {
            id: addIdActivity(),
            activity
        }]);
        setMessage('');
        setActivity('');
    }

    function removeTodo(todoId) {
        const filteredTodo = todos.filter(function (todo) {
            return todo.id !== todoId;
        });

        setTodos(filteredTodo);

        if (edit.id) cancelEdit();

    }

    function editTodo(todo) {
        console.log('set edit');
        setActivity(todo.activity);
        setEdit(todo);
    }

    function cancelEdit() {
        setEdit({});
        setActivity('');
    }

    function doneTodo(todo) {
        console.log(todo);
    }

    return (
        <>
            <h1>Aktivitas Harian</h1>
            {message && <div style={{ color: 'red' }} >{message}</div>}
            <form onSubmit={saveAktivity} >
                <input
                    type="text"
                    placeholder="Masukan aktivitas"
                    value={activity}
                    onChange={function (event) {
                        setActivity(event.target.value);
                    }}
                />
                <button type="submit">{edit.id ? 'Simpan Perubahan' : 'Tambah'}</button>
                {edit.id &&
                    <button onClick={cancelEdit} >Batal Edit</button>
                }
            </form>

            {todos.length > 0 ? (
                <ul>
                    {todos.map(function (todo) {
                        return (
                            <>
                                <li key={todo.id} >{todo.activity}
                                    <input type="checkbox" onChange={doneTodo.bind(this, todo)} />
                                    <button onClick={editTodo.bind(this, todo)} >Edit</button>
                                    <button onClick={removeTodo.bind(this, todo.id)} >Hapus</button>
                                </li>
                            </>

                        );
                    })
                    }
                </ul>
            ) : (
                <p><i>Todos maih kosong</i></p>
            )
            }


        </>
    )

}

ReactDOM.render(<App />, root);


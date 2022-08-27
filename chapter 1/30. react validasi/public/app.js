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
        done: false
      };
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Aktivitas Harian"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveAktivity
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Masukan aktivitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'Simpan Perubahan' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEdit
  }, "Batal Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onChange: doneTodo.bind(this, todo)
    }), /*#__PURE__*/React.createElement("button", {
      onClick: editTodo.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodo.bind(this, todo.id)
    }, "Hapus")));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Todos maih kosong")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
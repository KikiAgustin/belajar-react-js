const root = document.querySelector('#root');

function App() {


    const [nama, setNama] = React.useState('Kiki');

    function ketikaSubmit(event) {
        event.preventDefault();
        console.log('Nama :', nama);
    }

    return (
        <form onSubmit={ketikaSubmit}  >
            <div>
                <label>Nama</label>
                <input
                    type="text"
                    name="nama"
                    value={nama}
                    onChange={function (event) {
                        setName(event.current.value)
                    }}
                />
            </div>
            <button type="submit" >Kirim</button>
        </form>
    );

}

ReactDOM.render(<App />, root)



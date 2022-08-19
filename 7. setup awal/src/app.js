const root = document.querySelector('#root');

console.log('compile otomatis');

function tick() {
    const element = (
        <div>
            <h1>Jam Sekarang</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )

    ReactDOM.render(element, root);
}

tick();

setInterval(function () {
    tick();
}, 1000)
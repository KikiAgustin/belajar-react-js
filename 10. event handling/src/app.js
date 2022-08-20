const root = document.querySelector('#root');

function clickFunction(msg) {
    alert(msg);
}

const element = (
    <button onClick={clickFunction.bind(this, 'Hei aku sudah diklik')} >Click Me</button>
)

ReactDOM.render(element, root);


const root = document.querySelector('#root');

function App() {
  React.useEffect(function () {
    const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    });
    console.log(getData);
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Fech Data");
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
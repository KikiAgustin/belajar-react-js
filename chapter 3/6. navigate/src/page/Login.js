import { useNavigate } from 'react-router-dom';
export default function Login() {

    const nav = useNavigate();

    function longinHandle(event) {
        event.preventDefault();

        const checklogin = true;
        if (checklogin) {
            nav('/dashboard');
        }

    }

    return (

        <>
            <h1>Ini halaman login</h1>
            <form onSubmit={longinHandle} >
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button>Login</button>
            </form>
        </>

    );
}
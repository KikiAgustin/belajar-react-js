import { Link, Outlet } from 'react-router-dom';

export default function About() {
    return (
        <>
            <h1>Halaman About</h1>
            <p>ini adalah halaman about, silahkan pilih list yang ada dibawah ini</p>
            <ul>
                <Link to="/about/team" >team</Link>
            </ul>

            <Outlet />

        </>
    );
}
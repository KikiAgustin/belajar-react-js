import { useParams } from 'react-router-dom';
export default function BlogDetail() {
    const urlParams = useParams();
    return (
        <>
            <h1>Artikel</h1>
            <p>ini adalah halaman dari {urlParams.slug} </p>
        </>
    );
}
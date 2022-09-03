import { useEffect } from "react";

export default function Home() {

    useEffect(function () {
        document.title = "Home";
    });

    return (
        <section className="section" >
            <h1 className="section-title" >Selamat datang di website ku</h1>
            <p className="section-description">ini adalah halaman website yang menampilkan profile ku</p>
        </section>
    );
}
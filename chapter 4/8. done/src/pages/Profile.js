import { useEffect } from "react";

export default function Profile() {

    useEffect(function () {
        document.title = "Profile";
    });

    return (
        <section className="section">
            <h1 className="section-title">Hai namaku adalah Kiki Agustin</h1>
            <p className="section-description">aku adalah seorang web developer yang baru lulus dari harvard!</p>
        </section>
    );
}
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {

    useEffect(function () {
        document.title = "Contact";
    });

    return (
        <section className="section">
            <p className="section-description">kalian bisa menghubungi aku pada contact yang tertera dibawah</p>
            <ul>
                <li>WA: 085667887665</li>
                <li>Email: kikiagustin@pinterbaget.com</li>
            </ul>
            <p className="section-description">Ato kalian bisa melihat saya pansos di sosmed</p>
            <ul>
                <li><Link to="www.facebook.com" />Facebook</li>
                <li><Link to="ww.instagram.com/kikiagustiiin" />Instagram</li>
            </ul>
        </section>
    );
}
import React from 'react';
import profil from '../assets/profil.jpg';

const Card = () => {
    return (
        <article className="card">
            <header className="card__header">
                <img src={profil} alt="profil" />
            </header>
            <section className="card__body">
                <div className="infos">
                    <h3 className="infos__name">Nathan Akpawu</h3>
                    <span className="infos__function">Frontend Developper</span>
                    <span className="infos__description">Lorem ipsum dolor</span>
                </div>
                <div className="social-medias">
                    <button className="social-medias__email">
                        <i className="fa-solid fa-envelope"></i> Email
                    </button>
                    <button className="social-medias__linkedin">
                        <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>
                </div>
                <div className="show-case">
                    <h4 className="show-case__title">About</h4>
                    <p className="show-case__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas nisi
                        tempore nobis illo soluta nam cumque non natus vitae.
                    </p>
                </div>
                <div className="show-case">
                    <h4 className="show-case__title">Interests</h4>
                    <p className="show-case__paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas nisi
                        tempore nobis illo soluta nam cumque non natus vitae.
                    </p>
                </div>
            </section>
            <footer className="card__footer">
                <a href="/">
                    <i className="fa-brands fa-square-twitter"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-square-github"></i>
                </a>
            </footer>
        </article>
    );
};

export default Card;

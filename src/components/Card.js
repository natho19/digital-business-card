import React from 'react';

const Card = () => {
    return (
        <article className="card">
            <header className="card__header">
                <img src="" alt="" />
            </header>
            <section className="card__body">
                <div className="infos">
                    <h3 className="infos__name">Laura Smith</h3>
                    <span className="infos__function">Frontend Developper</span>
                    <span className="infos__description">Lorem ipsum dolor</span>
                </div>
                <div className="social-medias">
                    <button className="social-medias__email">Email</button>
                    <button className="social-medias__linkedin">linkedIn</button>
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
                <i>Twitter</i>
                <i>Facebook</i>
                <i>Instagram</i>
                <i>GitHub</i>
            </footer>
        </article>
    );
};

export default Card;

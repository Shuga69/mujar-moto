import React from 'react';
import Fade from 'react-reveal/Fade';
import './Home.css'
const Home = () => {
    return (
        <main className="main">

            <Fade left big cascade>
                <div className="text-section">
                    <h1 className="main-title">
                        WITAJ NA STRONIE MUJAR - <nobr>"Z PASJI DO MOTOCYKLI"</nobr>
                    </h1>
                    <div className="main-phrase">TA WITRYNA TO GARŚĆ DOŚWIADCZEŃ I ANALIZ ZEBRANYCH W JEDNĄ CAŁOŚĆ</div>
                    {/*<Link to="contact" smooth={true} className="btn-link">{this.props.t('main-section.5')}</Link>*/}
                </div>
            </Fade>
        </main>
    );
};

export default Home;
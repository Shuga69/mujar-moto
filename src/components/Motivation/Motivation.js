import React from 'react';
import './Motivation.css'
import mot1 from '../../assets/motivation1.jpg'
import mot2 from '../../assets/motivation2.jpg'
import mot3 from '../../assets/motivation3.jpg'
import mot4 from '../../assets/motivation4.jpg'
import mot5 from '../../assets/motivation5.jpg'
import mot6 from '../../assets/motivation6.jpg'

const Motivation = () => {
    return (
        <div className="motivation-section">
            <div className="container">
            <div className="motivation__inner">
                <div className="motivation-text">
                    <h1>FAJNIE, <nobr>ŻE</nobr> WPADŁEŚ.</h1>
                <p>Witam wszystkich miłośników jazdy motocyklem. Nazywam się Ryszard Chomka, jazda motocyklem jest moją pasją.
                    Chcę, aby na tej stronie w większości były przydatne informację, które pomogą Wam podnieść poziom Waszych umiejętności jazdy motocyklem, więc nie zamierzam się zbytnio rozpisywać o sobie, lecz skupić się na opisywaniu technik jazdy + zdjęcia + filmy + inne informacje które uznałem,  że mogą być przydatne.</p>
                </div>
                <div className="motivation-collage">
                    <div>
                    <img width="500px" height="100%" src={mot1}/>
                    </div>
                    <div>
                    <img width="500px" height="100%" src={mot2}/>
                    </div>
                    <div>
                    <img width="500px" height="100%" src={mot3}/>
                    </div>
                    <div>
                    <img width="500px" height="100%" src={mot4}/>
                    </div>
                    <div>
                    <img width="500px" height="100%" src={mot5}/>
                    </div>
                    <div>
                    <img width="500px" height="100%" src={mot6}/>
                    </div>
                </div>
        </div>
        </div>
        </div>
    );
};

export default Motivation;
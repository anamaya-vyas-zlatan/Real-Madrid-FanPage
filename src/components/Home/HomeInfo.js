import footy from '../../assets/Football.png';

const HomeInfo = () => {
    return ( 
        <div className="home-info">
            <div className="container">
                <div className="box box1">
                    <h2>REAL MADRID BEAT LIVERPOOL AT ANFIELD</h2>
                    <p>The Kop Stunned by Los Blancos as Vinicius Jr. scored a Brace.</p>
                </div>
                <div className="box box2"></div>
                <div className="box box3">
                    <img src = { footy } alt = "Football Logo" className="footy-logo" />
                    <h3>Team</h3>
                    <p>Season 2023-24</p>
                </div>
            </div>
        </div>
     );
}
 
export default HomeInfo;
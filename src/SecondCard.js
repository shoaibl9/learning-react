import './Card.css';
import './SecondCard.css';

function SecondCard() {
  return (
    <div className="Card-body">
      <div className="container">
        <div className="left-sideSecond">
          <h2 className="h2Left">What's new?</h2>
          <div className="boxes">16 Nov 2020
I've recorded a podcast for ENGL182, you can listen to it here, with a few extras!</div>
          <div className="boxes">30 Sep 2020
Keyboard build logs are slowly going up as I have the time to write them.

Landing page is setup temporarily for now too.</div>
          <div className="boxes"></div>
        </div>
        <div className="right-sideSecond">
          <div className="boxes">
            <p className="center">Code</p>
          </div>
          <div className="boxes">
            <p className="center">Mechanical Keyboards</p>
          </div>
          <div className="boxes">
            <p className="center">Get in touch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondCard;

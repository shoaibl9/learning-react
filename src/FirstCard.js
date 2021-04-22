import './Card.css';
import './FirstCard.css';
import doodlebob from './images/DoodleBob.png';

function FirstCard() {
  return (
    <div className="Card-body">
      <div className="container">
        <div className="left-side">
          <img src={doodlebob} className="image" alt=""/>
          <h3>About me</h3>
        </div>
        <div className="right-side">
          <h3><strong>Yu Hao</strong> Wong</h3>
          <a href="https://www.maps.google.com" target="_blank" rel="noreferrer noopener">Kuala Lumpur, Malaysia</a>
          <a href="https://www.cs.washington.edu" target="_blank" rel="noreferrer noopener">UW CSE 2024</a>
          <p>Hi there! My name is Hao and I'm a Computer Science student at the University of Washington! I'm a huge fan of technology that's not only aesthically pleasing but also functionally intuitive.</p>
          <p>haoyudoing.com is my way of showcasing my latest projects and endeavours to the world. Outisde of tech, my interests include sports, racing, food and maker culture. I’m always on the lookout for new experiences and opportunities, as well as the chance to connect with new people!</p>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;

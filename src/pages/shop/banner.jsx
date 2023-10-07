import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  
  return (
  <div>
    <div className="ad">
      <p>Get the best deals this summer for 50% off. Shop now!</p>
    </div>
    <Carousel>
      <Carousel.Item interval="2000">
        <img src="https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg" style={{height: "600px",width:"100vw"}} text="First slide" />
      </Carousel.Item>
      <Carousel.Item interval="2000">
        <img src="https://nestasia.in/cdn/shop/files/Main_Banners_12_0ba13132-c7ea-428c-8f33-17506d584b68_1920x.png?v=1696650001" style={{height: "600px",width:"100vw"}} text="Second slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;
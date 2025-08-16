import App from "../App";

const Home = ({ HomeValue, setHome }) => {
  const play = () => {
    setHome(!HomeValue);
  }
  return (
    <>
      <div className="Hero">
        <div className="hero_image"><img src="home_image.png" className="hero_image1"></img></div>
        <div className="hero_content">
          <button type="button" class=" start-btn" onClick={play} >PLAY NOW</button>
        </div>
      </div >
    </>
  )

}
export default Home;
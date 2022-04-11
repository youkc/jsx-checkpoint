import imgsrc from "./assets/imageInSrc.jpg";
import "./App.css";
import "./assets/custom.css";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <img src={imgsrc} alt="" />
        <img src="./imageInPublic.jpg" alt="" />
      </div>
      <video width={320} height={240} controls autoPlay loop muted>
        <source src="./myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;

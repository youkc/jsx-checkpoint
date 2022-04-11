import imgpublic from "./imageInPublic.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={AuthenticatorAssertionResponse()} />
        <br />
        <img src={imgpublic} />
      </div>
      <video width={320} height={240} controls="">
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;

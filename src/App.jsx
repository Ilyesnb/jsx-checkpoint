import "./style.css";
import imageInSrc from "./imageInSrc.jpg"
import myvideo from "./myvideo.mp4"

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100w" }}>
        <h1 className="titleRed">votre nom ici</h1>
        <br /> 
        <img src={imageInSrc}  alt="imageInSrc" width="100px" />

        <br />
        <img src="/imageInPublic.jpg"  alt="imageInPublic" width="100px" />
        <br />
      </div>
      <video width="320" height="240" controls>
        <source src={myvideo} type="video/mp4" />
      </video>
    </div>
  );
}
export default App;

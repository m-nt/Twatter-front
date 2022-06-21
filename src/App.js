import Twaat from "./components/Twaat";
import Twatting from "./components/Twatting";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="w-25">Test</div>
      <div className="App w-50 d-flex flex-column-reverse">
        <Twaat username={"mohamad"} id={5456165651} twaat={"hello mother fuckers"} likes={3} retwaats={5} replys={10} />
        <Twaat username={"ali"} id={5646461561} twaat={"hey bois"} likes={3000} retwaats={540} replys={320} />
        <Twatting />
      </div>
      <div className="w-25">Test</div>
    </div>
  );
}

export default App;

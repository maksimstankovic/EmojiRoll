import "./App.css";
import Slotbtn from "./Slotbtn";

function App() {
  return (
    <div>
      <Slotbtn
        val1={["😅", "😚", "🙂", "🙃", "😂"]}
        val2={["😅", "😚", "🙂", "🙃", "😂"]}
        val3={["😅", "😂", "🙂", "😚", "🙃"]}
      />
    </div>
  );
}

export default App;

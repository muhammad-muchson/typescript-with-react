import "./App.css";
import ClassComp from "./classComponent";
import { Card } from "./functionComponent";
import { DefaultProps } from "./defaultprops/DefaultProps";
function App() {
  return (
    <div className="App">
      {/* <ClassComp nama="Arjuna" title="Belajar Class Component" />
      <Card
        title={"Belajar Function Component"}
        paragraph={"Menggunakan Typescript"}
      /> */}
      <DefaultProps />
    </div>
  );
}

export default App;

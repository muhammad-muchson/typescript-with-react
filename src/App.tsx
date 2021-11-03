import "./App.css";
import BasicEventHandlingButton from "./BasicEventHandlingButton";
import { RestrictiveEventHandling } from "./RestrictiveEventHandling";
function App() {
  return (
    <div className="App">
      <h1>Event Handling</h1>
      {/* <BasicEventHandlingButton children="click me!!" /> */}
      <RestrictiveEventHandling
        children="click me!!"
        title="RestrictiveEventHandling"
      />
    </div>
  );
}

export default App;

import useSwitch from "./Components/useSwitch";
import useDate from "./Components/useDate";

function App() {
  const [isOn, toggle] = useSwitch();
  const { date, time, full } = useDate();

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <div>
        <h1>Data e ora attuali:</h1>
        <p>Data: {date}</p> - <p>Ora: {time}</p> - <p>Data e Ora: {full}</p>
      </div>
    </>
  );
}

export default App;

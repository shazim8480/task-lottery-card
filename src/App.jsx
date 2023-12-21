import "./App.css";
import CardContainer from "./Components/CardContainer/CardContainer";
import Button from "./Components/UI/Button";
import Typography from "./Components/UI/Typography";

function App() {
  return (
    <main className="">
      <Typography className={"mb-10"} variant="header">
        Vælg din lodseddel
      </Typography>
      <CardContainer />
    </main>
  );
}

export default App;

import "./App.css";
import Typography from "./Components/UI/Typography";

import CardContainer from "./Components/CardContainer/CardContainer";

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

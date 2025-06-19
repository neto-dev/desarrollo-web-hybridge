import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <Button>
        Botón 1
      </Button>
      <Button variant="outline">
        Botón 2
      </Button>
      <Button variant="destructive">
        Botón 3
      </Button>
    </div>
  );
}

export default App;
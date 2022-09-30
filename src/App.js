
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Pages/Pages";




function App() {
  return (
    <div>
      <BrowserRouter>
     <Pages></Pages>
     </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";


function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Navbar/>
      

    </Router>
      
    </>
  );
}

export default App;

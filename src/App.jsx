import "./App.css";
import ShowList from "./component/showlist/Showlist";
import ShowSummary from "./component/summary/Summary";
import Contact from "./component/contactForm/Contact";
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Routes>
        <Route path="/" element={<ShowList/>} />
        <Route path="/summary/:showId" element={<ShowSummary />} />
        <Route path="/payment-page/:showId" element={<Contact/>}/>
        </Routes>
      </Router>
  
  );
}

export default App;

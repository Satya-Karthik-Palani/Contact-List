import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<ContactList/>}></Route>
          <Route exact path='/addcontact' element={<AddContact/>}></Route>
          <Route exact path='/editcontact/:id' element={<EditContact/>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;

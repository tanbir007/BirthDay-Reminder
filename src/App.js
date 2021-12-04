

import './App.css';
import React ,{useState} from 'react';
import List from './components/List';
import data from './data'



function App() {
 const [people ,setPeople] = useState(data);



  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people}/>
        <button onClick={() =>setPeople([])}>Click Here</button>
      </section>
    </main>
  );
}

export default App;

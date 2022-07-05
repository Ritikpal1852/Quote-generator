import React, {useState} from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [state, setState]= useState([])
   
          // useEffect( () => {
            const fetchAdive=()=>{
              axios.get('https://api.adviceslip.com/advice')
                .then((response) => {
                  const {advice}= response.data.slip;
                 setState({advice});
                 //console.log(response.data.slip.advice);
               })
               .catch((error)=>{
                console.log(error);
               });
      }
          //     fetchAdive();
          // }, []);
 
  return (
    <div className="App">
      <div className="card">
     <h1 className="heading">{state.advice}</h1>
     <button className="button" onClick={fetchAdive}>
      <span>Give me a Quote</span>
      </button>
     </div>
    </div>
  );
}

export default App;

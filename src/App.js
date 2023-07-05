import './App.css';
import { useState } from 'react';
function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  const shoot = () => {
    alert("Great Shot!");
  }
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }
  return (
    <div className="App">
      <MyForm />
      <h1>Hello World!</h1>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
      <button onClick={shoot}>Take the shot!</button>
      <Goal isGoal={true} />
      <Garage cars={cars} />

      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <CarList key={car.id}  brand={car.brand} />)}
      </ul>

    </div>
  );
}
function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}
function CarList(props) {
  return <h2>I am a { props.brand }!</h2>;
}
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}
function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
function Garage(props) {
  const cars = props.cars;
  
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}
export default App;

import "./App.css";
import { useState, useEffect, useRef, useReducer } from "react";
import Todos from "./Todos";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";
let name = "merlin";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    console.log("tres", mode);
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has enables", "success");
      document.title = "textUtilities - Dark Mode";
      // setInterval(()=>{
      //   document.title ='iNSTALL textUtilities ';

      // },1000);
      // setInterval(()=>{
      //   document.title ='textUtilities is amazing Now ';

      // },1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has enables", "success");
      document.title = "textUtilities - Light Mode";
    }
  };

  const carInfo = { name: "Ford", model: "Mustang" };
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const shoot = () => {
    alert("Great Shot!");
  };
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal />;
    }
    return <MissedGoal />;
  }

  const increment = () => {
    setCount((c) => c + 1);
  };
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(2);
  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    previousInputValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    setCalculation(() => counter * 2);
  }, [counter]); // <- add the count variable here
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  // Initial state
  const initialState = { count: 0 };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const i = 5;
  return (
    // <div className="App">
    //   <div>
    //     <h1>{i == 1 ? "True!" : "False!"}</h1>
    //   </div>

    //   <Navbar aboutText="about" />
    //   <div className="container my-3">
    //     <TextForm heading="Enter the text to analyze" />
    //   </div>
    //   <div className="mx-5">
    //     <nav>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //     </nav>
    //     <img src=" alt=" />
    //     <div>
    //       <h1>Hello {name}</h1>
    //       <p>lorem34</p>
    //     </div>
    //     <div className="blank">hi</div>

    //     <p>Count: {state.count}</p>
    //     <button onClick={() => dispatch({ type: "INCREMENT" })}>
    //       Increment
    //     </button>
    //     <button onClick={() => dispatch({ type: "DECREMENT" })}>
    //       Decrement
    //     </button>
    //     <br></br>
    //     <input
    //       type="text"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //     <h2>Current Value: {inputValue}</h2>
    //     <h2>Previous Value: {previousInputValue.current}</h2>

    //     <input type="text" ref={inputElement} />
    //     <button onClick={focusInput}>Focus Input</button>

    //     <h1>I've rendered {counter} times!</h1>
    //     <p>Calculation: {calculation}</p>
    //     <p>
    //       It is a {car.color} {car.model} from {car.year}.
    //     </p>
    //     <button type="button" onClick={updateColor}>
    //       Blue
    //     </button>

    //     <Todos todos={todos} />
    //     <hr />
    //     <div>
    //       Count: {count}
    //       <button onClick={increment}>+</button>
    //     </div>
    //     <MyForm />
    //     <h1 style={{ backgroundColor: "lightblue" }}>Hello World!</h1>
    //     <h1 style={myStyle}>Who lives in my garage?</h1>
    //     <Car brand={carInfo} />
    //     <button onClick={shoot}>Take the shot!</button>
    //     <Goal isGoal={true} />
    //     <Garage cars={cars} />

    //     <h1>Who lives in my garage?</h1>
    //     <ul>
    //       {cars.map((car) => (
    //         <CarList key={car.id} brand={car.brand} />
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div>
      <Navbar title="ffd" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Router>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}
function CarList(props) {
  return <h2>I am a {props.brand}!</h2>;
}
function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}
function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Select Car:
        <select
          name="carName"
          value={inputs.carName || ""}
          onChange={handleChange}
        >
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label>
      <input type="submit" />
    </form>
  );
}
function Garage(props) {
  const cars = props.cars;

  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import "./SimpleCounter.css";
import {
  addIncrement,
  addDecrement,
} from "../reduxToolkit/slices/CounterSlice";

const SimpleCounter = () => {
  const count = useSelector((store) => store?.counter?.Count);

  const dispatch = useDispatch();

  const Incremant = () => {
    count < 10 && dispatch(addIncrement());
  };

  const Decrement = () => {
    count > 0 && dispatch(addDecrement());
  };

  return (
    <div className="wrapper">
      {/* <h5>Jai Sai master Jai Bapuji Maharaj</h5> */}

      <button className="inc" onClick={Incremant} disabled={count === 10}>
        +
      </button>
      <p> {count} </p>
      <button className="dec" onClick={Decrement} disabled={count === 0}>
        -
      </button>
    </div>
  );

  
};

export default SimpleCounter;

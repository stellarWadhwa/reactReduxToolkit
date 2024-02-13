import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {soldCar, boughtCar} from "./features/carSlice/carSlice"

function App() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.car);
  const count = useSelector(boughtCar);
  
console.log(count.payload.car.value)
function dispatchCar(){
  dispatch(soldCar())
}
  return (
    <div className="App">
<span>useSelec</span>
<button onClick={dispatchCar}>click</button>
    </div>
  );
}

export default App;

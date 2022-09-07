import { useSelector, useDispatch } from 'react-redux'

import counterActions from './actions/counter.js';
import './App.css'

function App() {
	const dispatch = useDispatch();

	const count = useSelector((state) => state.count.count);

  return (
    <div className="App">
			<h1>Redux Basics</h1>
			<div className="container">
				<div className="card" style={{color: "white"}}>
					{count}
				</div>
				<div className="card">
					<button className="button" onClick={() => dispatch(counterActions.increaseBy1())}>increase</button>
					<button className="button" onClick={() => dispatch(counterActions.decrease(1))}>decrease</button>
					<button className="button" onClick={() => dispatch(counterActions.increase(5))}>increase by 5</button>
				</div>
			</div>
    </div>
  )
}

export default App

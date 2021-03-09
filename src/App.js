// import logo from './logo.svg';
// import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {sign_in} from './actions';


function App() {
  const logged= useSelector(state=>state.loggedReducer)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Status aktif atau tidak aktif</h1>
      {logged ? <h2>anda sedang aktif</h2>:<h2>anda sedang tidak aktif</h2>}
      <button onClick={()=>dispatch(sign_in())}>aktifkan</button>
    </div>
  );
}

export default App;

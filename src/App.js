import logo from './logo.svg';
import './App.css';
import { UserDetails } from './useState-example/user';
import { PersonDetails } from '../src/useState-example/person';
import { PersonAllDetails } from '../src/useState-example/person1';
import { UpdateDetails } from './useState-example/person2';
import { Timer } from './useEffect-Examples/user';
import { Counter } from './useEffect-Examples/count';
import { TimerCount } from './useEffect-Examples/timer';
import { Component1 } from './useContext-Examples/userInfo';
import { ParentComponent } from './useContext-Examples/demo';
import { NavbarComponent, ReducerDemo } from './useReducer-Example/navbar';
import { UseRefDemo } from './useRef-Examples/form';
import { FormInputBox } from './useRef-Examples/form1';
import { MemoParentComponent } from './useMemo-Example/calculation';
import { TotalIncrement } from './useCallback-Example/counting';
function App() {
  return (
    <>
      {/* <UserDetails/> */}
      {/* <PersonDetails /> */}
      <PersonAllDetails />
      <UpdateDetails />
      <Timer />
      <Counter />
      <TimerCount />
      <Component1 />
      <ParentComponent />
      <NavbarComponent />
      <UseRefDemo/>
      <FormInputBox/>
      <MemoParentComponent/>
      <TotalIncrement/>


    </>
  );
}

export default App;

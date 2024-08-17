import logo from './logo.svg';
import { Link } from 'react-router-dom';
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
import { Car } from './props/car';
import { Garage } from './props/car-garage';
import { CarComponent2 } from './props/car2';
import { CarObject } from './props/car3';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact } from './Routes/contact';
import { Home } from './Routes/home';
import { About } from './Routes/about';
import { Demo } from './Events-Example/example1';
import { NoPage } from './Routes/nopage';
import { LayOutPage } from './Routes/layoutPage';
function App() {
  return (
    <>
      {/* <UserDetails/> */}
      {/* <PersonDetails /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOutPage />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="personAllDetails" element={<PersonAllDetails />} />
          <Route path="UpdateDetails" element={<UpdateDetails />} />
          <Route path="timer" element={<Timer />} />
          <Route path="counter" element={<Counter />} />
          <Route path="timerCount" element={<TimerCount />} />
          <Route path="component1" element={<Component1 />} />
          <Route path="ParentComponent" element={<ParentComponent />} />
          <Route path="NavbarComponent" element={<NavbarComponent />} />
          <Route path="UseRefDemo" element={<UseRefDemo />} />
          <Route path="FormInputBox" element={<FormInputBox />} />
          <Route path="MemoParentComponent" element={<MemoParentComponent />} />
          <Route path="TotalIncrement" element={<TotalIncrement />} />
          <Route path="car" element={<Car brand="Fortuner" />} />
          <Route path="garbage" element={<Garage />} />
          <Route path="carcomponent2" element={<CarComponent2 />} />
          <Route path="carobject" element={<CarObject />} />
          <Route path="demo" element={<Demo />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

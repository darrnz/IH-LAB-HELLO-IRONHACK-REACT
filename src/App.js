
import Main from './components/Main'
import Features from './components/Features'

import './App.css';


//funciones
function App() {
  return ( ///JSX => FORMATO DE MEZCLA A js Y html (SIMILAR A LA `${}`)
    <div className="App">
      <main >
        <Main />
        </main>
      <div class ='features'>
        <Features src="/images/icon1.png" text="Declarative" explicacion="React makes it painless to create interactuve UI"  />
        <Features src="/images/icon2.png" text="Components" explicacion="Build encapsulated components that manage their state" />
        <Features src="/images/icon3.png" text="Single-Way" explicacion="A set  of immutable values are passed to component's" />
        <Features src="/images/icon4.png" text="JSX" explicacion="Statically-typed designed to run on modern browsers" />
      </div>
    </div>
  );
}


//exportacion
export default App;

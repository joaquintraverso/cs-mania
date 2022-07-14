import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>CS-Mania: jugadores profesionales csgo</h1>
        <Testimonio 
          img='simple' 
          nombre='s1mple'
          cargo='AWPer - IGL'
          texto='Se encuentra jugando en el equipo NaVi, Se encuentra jugando en el equipo NaVi, Se encuentra jugando en el equipo NaVi' />
        <Testimonio 
          img='simple' //img repetida
          nombre='KennyS'
          cargo='Ex-jugador'
          texto='Ex-jugador que se encontraba jugando en G2Sports, Ex-jugador que se encontraba jugando en G2Sports, Ex-jugador que se encontraba jugando en G2Sports' />
      </div>
      <footer className='footer'><p>React basico - Por Joaquin Traverso</p></footer>
    </div>
  );
}

export default App;

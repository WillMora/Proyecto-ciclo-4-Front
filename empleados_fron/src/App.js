import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componentes/login/login';
import Menu from './componentes/navbar/navbar';

import AppRouter from './componentes/router/router';

function App() {
  return (
    <div className="App">
      <Menu/>
      <AppRouter/>
    </div>
  );
}

export default App;

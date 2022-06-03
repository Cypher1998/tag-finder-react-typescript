import './App.scss';
import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="AppContainer">
        <AppHeader />
        <AppBody />
      </div>
    </AppProvider>
  );
}

export default App;

import './App.css';
import WatchForm from './components/WatchForm/WatchForm';
import WatchList from './components/WatchList/WatchList';

function App() {
  return (
    <div className='container'>
      <WatchList />
      <WatchForm />
    </div>
  );
}

export default App;

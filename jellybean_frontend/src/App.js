import './App.css';
import FlavorForm from './FlavorForm';
import FlavorList from './FlavorList';
import axios from 'axios';
import { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [flavors, setFlavors] = useState([]);

  const fetchFlavors = async () => {
    const response = await axios.get('/api/flavors/');
    setFlavors(response.data);
  };

  useEffect(() => {
    fetchFlavors();
  }, []);

  const addFlavor = async (newFlavor) => {
    await axios.post('/api/flavors/', newFlavor);
    fetchFlavors();
  };

  return (
    <div className='container mt-4'>
      <h1>Jelly Bean Flavors</h1>
      <FlavorForm addFlavor={addFlavor} />
      <FlavorList flavors={flavors} fetchFlavors={fetchFlavors} />
    </div>
  );
}

export default App;

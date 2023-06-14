import Navbar from './navbar';
import Home from './Home';
import Fetchingdata from './fetchingdata';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Fetchingdata />
      <div className="content">
      </div>
    </div>
  );
}

export default App;

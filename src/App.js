import './App.css';
import Header from './components/ui/Header'
import TopContainer from './components/ui/TopContainer'
import MidContainer from './components/ui/MidContainer'
import BottomContainer from './components/ui/BottomContainer'

const App = () => {
  return (
    <div className="App">
      <TopContainer />
      <Header />
      <MidContainer />
      <BottomContainer />
    </div>
  );
}

export default App;

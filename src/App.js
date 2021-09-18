import './App.css';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Timeline/>
                <Sidebar/>
            </div>
        </div>
    );
}

export default App;

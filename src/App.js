
import './App.css'
import Home from './components/pages/Home'
import Task from './components/pages/Task'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>

          <Route path='/tasks/:id' element={<Task />}/>

        </Routes>
      </main>
    </Router>
  );
}

export default App;

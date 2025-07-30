import Sidebar from './Components/Sidebar';
import Home from './Components/Home'
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Education from './Components/Education';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
        {/* <Home /> */}
        {/* <Contact /> */}
        {/* <Projects /> */}
        <Education />
      </main>
    </div>
  );
}

export default App;
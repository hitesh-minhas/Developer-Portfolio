import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
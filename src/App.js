
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './utilities/routes';

function App() {
  return (
    <div className="App bg-lime-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<Homepage />} />)
  );

  return <RouterProvider router={router} />;
};

export default App;

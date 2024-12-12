import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

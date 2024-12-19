import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './pages/JobPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="*" element={<NotFound />} />
        <Route loader={jobLoader} path="/jobs/:id" element={<JobPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

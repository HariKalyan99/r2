import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreatePost from './components/CreatePost.jsx';
import Dashboard from './components/Dashboard.jsx';
import App from './routes/App.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <CreatePost />},
    {path: "/dashboard", element: <Dashboard />},
  ]}
], {
  future: { ///////////?
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

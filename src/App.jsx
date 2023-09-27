import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

// layouts
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
        <Route path='*' element={<NotFound />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
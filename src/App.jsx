import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Product } from './Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Product />,
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

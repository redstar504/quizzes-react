import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './errorPage.jsx'
import Quiz, { loader as quizLoader } from './routes/quiz.jsx'
import Index from './routes/index.jsx'
import Root from './routes/root.jsx'
import Results from './routes/results.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'quiz/:quizId',
        element: <Quiz />,
        loader: quizLoader
      },
      {
        path: 'results',
        element: <Results />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

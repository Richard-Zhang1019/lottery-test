import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  }
] as RouteObject[]

export default routes

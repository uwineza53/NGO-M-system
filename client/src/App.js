import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/Error';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';
import { Route, Routes } from 'react-router-dom';

const NotFound = lazy(() => import('./components/NotFound'));
const Login = lazy(() => import('./pages/Login'));
const Reset = lazy(() => import('./pages/Reset'));
const Dashboard = lazy(() => import('./pages/Dashboard'));


function App() {

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

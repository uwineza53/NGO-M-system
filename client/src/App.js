import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/Error';
// import Login from './pages/Login';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading';

const Login = lazy(() => import('./pages/Login'));

function App() {

  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

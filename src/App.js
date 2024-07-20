import { createTheme } from '@mui/material';
import HomePage from '../src/pages/HomePage'
import { Footer, Navbar } from './components/shared';
import Layout from './components/shared/Layout';
import SignupPage from './pages/SignupPage';

function App() {

  const theme = createTheme({
    
  })
  return (
    <SignupPage />
  );
}

export default App;

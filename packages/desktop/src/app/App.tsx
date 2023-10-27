import './App.css';
import { SnackbarProvider } from 'notistack';
// import { AuthPage } from '@pages/auth';
import { MainPage } from '@pages/main';

export default function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <MainPage />
    </SnackbarProvider>
  );
}

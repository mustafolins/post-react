import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HttpRequest from './Components/HttpRequest';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <HttpRequest method='GET' url='https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3' />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;

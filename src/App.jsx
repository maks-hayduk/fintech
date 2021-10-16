import { makeStyles, createStyles, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'src/views/Routes';
import theme from 'src/theme';
import Layout from 'src/layout';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      },
      html: {
        height: '100%',
        width: '100%'
      },
      body: {
        height: '100%',
        width: '100%'
      }
    }
  })
);

function App() {
  useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

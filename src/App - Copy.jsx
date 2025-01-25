import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// Google OAuth
import { GoogleOAuthProvider } from '@react-oauth/google';

// routing
import Login from 'views/pages/authentication3/Login3';
import Dashboard from 'views/dashboard/index';
import themes from 'themes';
import NavigationScroll from 'layout/NavigationScroll';

// Routes setup with conditional authentication check
const router = createBrowserRouter([
  {
    path: '/test',
    element: localStorage.getItem('isAuthenticated') ? <Dashboard /> : <Login />,
  },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> },
]);

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        
        {/* Wrap your app with GoogleOAuthProvider */}
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
          <NavigationScroll>
            <RouterProvider router={router} />
          </NavigationScroll>
        </GoogleOAuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;

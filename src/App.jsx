import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import MainApp from "./components/MainApp";
import { authService } from "./lib/supabase";
import { appStyles } from "@/constants/styles";

function App() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    setLoadingAuth(true);

    const {
      data: { subscription },
    } = authService.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      setLoadingAuth(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAuthAction = async (authPromise, successCallback) => {
    setAuthError(null);
    try {
      const result = await authPromise;

      if (result.error) {
        throw result.error;
      }

      if (successCallback) {
        successCallback();
      }
    } catch (err) {
      setAuthError(err.message);
    }
  };

  const handleSignUp = (credentials) =>
    handleAuthAction(authService.signUp(credentials), () =>
      alert("Sign up successful!")
    );

  const handleLogin = (credentials) => {
    handleAuthAction(authService.signIn(credentials));
  };

  const handleGoogleLogin = () => {
    handleAuthAction(authService.signInWithGoogle());
  };

  if (loadingAuth) {
    return (
      <div className={appStyles.loadingContainer}>
        <p> Loading your cookbook... </p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={user ? <MainApp /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={
            !user ? (
              <Login
                onSignUp={handleSignUp}
                onLogin={handleLogin}
                onGoogleLogin={handleGoogleLogin}
                loading={loadingAuth}
                externalError={authError}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

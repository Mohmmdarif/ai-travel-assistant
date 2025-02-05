import { GoogleLogin } from "@react-oauth/google";

import { useEncryptLogin } from "../hooks/useEncryptLogin";

const Login = () => {
  const { loading, setLoading, error, setError, handleGoogleLogin } =
    useEncryptLogin();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login to Access</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          setLoading(true);
          try {
            handleGoogleLogin(credentialResponse);
          } catch (error) {
            setError(
              "Login failed! Make sure you have a valid google account."
            );
          } finally {
            setLoading(false);
          }
        }}
        onError={() => setError("Something went wrong. Please try again.")}
      />

      {loading && <p className="text-gray-500">Memproses...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;

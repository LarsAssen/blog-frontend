import { useFetchUser } from '../lib/authContext';
import { default as RegisterComponent } from '../components/Register';
const Register = () => {
  const { user, loading } = useFetchUser();
  return (
    <>
      <RegisterComponent />
    </>
  );
};

export default Register;
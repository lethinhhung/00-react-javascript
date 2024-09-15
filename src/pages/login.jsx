import { useContext } from 'react';
import { loginApi } from '../util/api';
import { AuthContext } from '../components/context/auth.context';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const handleSubmit = async (values) => {
        const res = await loginApi('hung@gmail.com', '123456');

        if (res && res.EC == 0) {
            localStorage.setItem('access_token', res.access_token);
            console.log('success');
            setAuth({
                isAuthenticated: true,
                user: {
                    email: res?.user?.email ?? '',
                    name: res?.user?.name ?? '',
                },
            });
            navigate('/');
        } else {
            console.log(res?.EM ?? 'failed');
        }
    };

    return <button onClick={handleSubmit}>Login</button>;
};

export default LoginPage;

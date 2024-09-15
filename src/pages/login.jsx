import { loginApi } from '../util/api';

const LoginPage = () => {
    const handleSubmit = async (values) => {
        const res = await loginApi('hung@gmail.com', '123456');

        if (res && res.EC == 0) {
            localStorage.setItem('access_token', res.access_token);
            console.log('success');
        } else {
            console.log(res?.EM ?? 'failed');
        }
    };

    return <button onClick={handleSubmit}>Login</button>;
};

export default LoginPage;

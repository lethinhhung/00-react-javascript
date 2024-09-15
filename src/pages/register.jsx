import { createUserApi } from '../util/api';

const RegisterPage = () => {
    const handleSubmit = async (values) => {
        const res = await createUserApi('hung', 'hung@gmail.com', '123456');

        console.log(res);
    };

    return <button onClick={handleSubmit}>Register</button>;
};

export default RegisterPage;

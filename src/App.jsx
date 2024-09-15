import { AuthContext } from './components/context/auth.context';
import Header from './components/layout/header';
import axios from './util/axios.customize';
import { useContext, useEffect } from 'react';

function App() {
    const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);
    useEffect(() => {
        const fetchAccount = async () => {
            setAppLoading(true);
            const res = await axios.get(`/v1/api/account`);
            if (res) {
                setAuth({
                    isAuthenticated: true,
                    user: {
                        email: res.email,
                        name: res.name,
                    },
                });
            }

            setAppLoading(false);
        };

        fetchAccount();
    }, []);

    return (
        <div>
            {appLoading === true ? (
                <>Loading</>
            ) : (
                <>
                    <Header />
                </>
            )}
        </div>
    );
}

export default App;

import React, { useContext, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const { auth, setAuth } = useContext(AuthContext);
    console.log(auth);
    const items = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        },
        ...(auth.isAuthenticated
            ? [
                  {
                      label: 'Logged',
                      key: 'logged',
                      icon: <MailOutlined />,
                  },
              ]
            : []),

        {
            label: `Welcome ${auth?.user?.email}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={'/register'}>Login</Link>,
                    key: 'login',
                },
                {
                    label: 'Logout',
                    key: 'logout',
                },
            ],
        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;

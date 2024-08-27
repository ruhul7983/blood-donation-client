import { NavLink, Outlet } from "react-router-dom";
import {
    ContainerOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";

const Dashboard = () => {
    const items = [
        {
            key: '1',
            icon: <FaHome />,
            label: <NavLink to="/dashboard/admin-home">Admin Home</NavLink>,
        },
        {
            key: '2',
            icon: <MdOutlineBloodtype />,
            label: <NavLink to="/dashboard/request-blood">Blood Request</NavLink>,
        },
        {
            key: '3',
            icon: <ContainerOutlined />,
            label: 'Option 3',
        },
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
                {
                    key: '5',
                    label: 'Option 5',
                },
                {
                    key: '6',
                    label: 'Option 6',
                },
                {
                    key: '7',
                    label: 'Option 7',
                },
                {
                    key: '8',
                    label: 'Option 8',
                },
            ],
        },
    ];

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="flex bg-white min-h-screen h-screen">
            {/* Sidebar */}
            <div 
                className={`bg-[#001529] flex flex-col items-center 
                            transition-all duration-300 
                            ${collapsed ? 'w-20' : 'w-64'} 
                            min-h-screen`}
            >
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                        margin: '16px 0',
                    }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    style={{ flexGrow: 1 }}
                />
            </div>

            {/* Content Area */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;

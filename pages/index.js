import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
    SettingOutlined, UploadOutlined,
    UserOutlined, VideoCameraOutlined,
} from '@ant-design/icons';

const Home = () => {
  return (
    <div>
              <Menu
            theme = 'dark'
            mode = 'inline'
            defaultSelectedKeys = { ['1'] }
        >
            <Menu.Item key = '1' icon = { <UserOutlined /> }>
                nav 1
            </Menu.Item>
            <Menu.Item key = '2' icon = { <VideoCameraOutlined /> }>
                nav 2
            </Menu.Item>
            <Menu.Item key = '3' icon = { <SettingOutlined /> }>
                nav 3
            </Menu.Item>
            <SubMenu
                key = 'sub2'
                // icon = { <UploadOutlined /> }
                title = 'Navigation Three'
            >
                <Menu.Item key = '7'>Option 7</Menu.Item>
                <Menu.Item key = '8'>Option 8</Menu.Item>
            </SubMenu>
        </Menu>
    </div>
  )
}

export default Home;
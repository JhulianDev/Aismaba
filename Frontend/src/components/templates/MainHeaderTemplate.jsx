import { Outlet } from 'react-router-dom';
import MainHeader from '../organisms/header/MainHeader';


const MainHeaderTemplate = () => {
    return (
        <div>
            <MainHeader/>
            <Outlet/>
        </div>
    );
};

export default MainHeaderTemplate;
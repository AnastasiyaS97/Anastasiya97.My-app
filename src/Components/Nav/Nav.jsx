import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
// let s = {
//     'nav': '.Nav_nav__2SYBA',
//     'item': 'Nav_item__1Owtg',
//     'active': 'Banckf_active'
// }

// let c1 = 'item';
// let c2 = 'item';
// //'item active'

// let classes = c1 + ' ' + c2;
// let classesNew = `${s.item} ${s.active}`;

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item } >Profile</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Nav;
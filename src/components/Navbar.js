import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = ()=>{
    return <div className={styles.container}>
       <h1>Soccer Manager</h1>
       <ul>
           <li>
           <NavLink to='/'>Store</NavLink>
           </li>
           <li>
           <NavLink to='/formation'>Formation</NavLink>
           </li>
       </ul>
    </div>
}

export default Navbar;
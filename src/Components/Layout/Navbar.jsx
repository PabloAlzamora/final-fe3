import { Link } from 'react-router-dom';
import { useDentistState } from '../utils/global.context';
import './Navbar.css'


const Navbar = () => {
  const { state, dispatch } = useDentistState();

  return (
    <div className={`container-nav ${state.theme}`}>
      <h1 className='titulo'>
        <span className="first-letter">D</span>H ODONTO
      </h1>
      <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>       
        <Link to="/favs">Favorites</Link>
        <button
          onClick={() => dispatch({ type: 'CHANGE_THEME' })}
         className='themeToggleButton'
        >  {state.theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
import Menu from './Menu';
import '../styles/navbar.css';

export default function NavBar({ nomeSite }) {
  return (
    <nav className="navbar">
      <h2>{nomeSite}</h2>
      <Menu />
    </nav>
  );
}
import { Logo } from './';

export const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
};

import Footer from './Footer';
import NavBar from './NavBar';
import Welcome from './Welcome';

const Layout: React.FC = ({ children }) => {
  return (
    <main className="font-display">
      <header>
        <NavBar />
        <Welcome />
      </header>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;

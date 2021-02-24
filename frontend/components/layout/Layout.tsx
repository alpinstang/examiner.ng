import Navigation from "./navigation";
import Footer from "./footer";

const Layout: React.FC = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;

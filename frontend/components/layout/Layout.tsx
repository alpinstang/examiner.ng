import Navigation from "./navigation";
import Footer from "./footer";

const Layout: React.FC = (props) => {
  return (
    <>
      <Navigation />
      <div className="h-20"></div>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FloatingContact from "../FloatingContact/FloatingContact";
//import FloatingEducation from "../FloatingEducation/FloatingEducation";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="relative bg-[#fdfefe]">
        {/* Optional subtle texture */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.06),transparent_60%)]
            pointer-events-none
          "
        />

        <div className="relative z-10">
          {children}
        </div>
      </main>

      <Footer />
      {/* <FloatingEducation /> */}
      <FloatingContact />
    </>
  );
};

export default Layout;

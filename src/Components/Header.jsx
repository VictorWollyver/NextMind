import HeaderMobileMenu from "./HeaderMobileMenu";
import NavMenuHeader from "./NavMenuHeader";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 z-10 bg-background shadow-sm flex items-center">
      <div className="container mx-auto px-4 max-w-[1246px]">
        <nav className="flex justify-between items-center">
          <h1 className="leading-6 font-bold text-2xl">
            Next
            <br />
            <span className="text-primary">Mind</span>
          </h1>
          <HeaderMobileMenu />
          <NavMenuHeader />
        </nav>
      </div>
    </header>
  );
};

export default Header;

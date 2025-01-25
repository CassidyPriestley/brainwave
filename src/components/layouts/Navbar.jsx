import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave, profile } from "../../assets";
import { navigation } from "../../constants";
import { Button } from "../elements/Button";
import { HamburgerMenu } from "../design/Header";
import { AppContext } from "../../context/AppContext";
import MenuSvg from "../../assets/svg/MenuSvg";

export const Navbar = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const { setShowLogin, user, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleLoginClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
    setShowLogin(true);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {user
              ? navigation.slice(0, -1).map((navItem) => (
                  <>
                    <a
                      key={navItem.id}
                      onClick={
                        navItem.onlyMobile ? handleLoginClick : handleClick
                      }
                      href={navItem.url}
                      className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                        navItem.onlyMobile ? "lg:hidden cursor-pointer" : ""
                      } 
                      px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                        navItem.url === pathname.hash
                          ? "z-2 lg:text-n-1"
                          : "lg:text-n-1/50"
                      } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                    >
                      {navItem.title}
                    </a>
                  </>
                ))
              : navigation.map((navItem) => (
                  <a
                    key={navItem.id}
                    onClick={
                      navItem.onlyMobile ? handleLoginClick : handleClick
                    }
                    href={navItem.url}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                      navItem.onlyMobile ? "lg:hidden cursor-pointer" : ""
                    } 
                      px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                        navItem.url === pathname.hash
                          ? "z-2 lg:text-n-1"
                          : "lg:text-n-1/50"
                      } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  >
                    {navItem.title}
                  </a>
                ))}
            {user && (
              <span
                onClick={logout}
                className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:hidden cursor-pointer"
              >
                Logout
              </span>
            )}
          </div>
          <HamburgerMenu />
        </nav>

        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 bg-conic-gradient text-slate-200 max-lg:hidden px-0.5 py-0.5 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer">
              <div
                className="relative p-3 bg-n-8 rounded-full overflow-hidden"
                onClick={() => navigate("/buy-credit")}
              >
                <p className="text-xs font-mono text-n-1">
                  Credits Left: {credit}
                </p>
              </div>
            </div>
            <p className="text-n-1/50 max-lg:hidden pl-4 ">Hi, {user.name}</p>
            <div className="relative group">
              <img
                className="w-10 drop-shadow h-6 hidden lg:block"
                src={profile}
                alt="User Icon"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-14">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm dark:bg-[#201f23] dark:border-none dark:text-slate-200">
                  <li
                    className="py-1 px-2 cursor-pointer pr-10"
                    onClick={logout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Button className="hidden lg:flex" onClick={() => setShowLogin(true)}>
            Get Started
          </Button>
        )}

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

// import React from "react";
// import NavMenuHeader from "./NavMenuHeader";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const HeaderMobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="text-center">
            <ul className="flex gap-10 flex-col">
              <li>
                <a href="/" className="font-semibold hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="font-semibold hover:text-secondary">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-semibold hover:text-secondary"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-semibold hover:text-secondary"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-semibold hover:text-secondary"
                >
                  Contate-Nos
                </a>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderMobileMenu;

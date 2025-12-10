"use client";
import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../ui/ResibleNavbar";
import Icon from "../Icon";
import { navItems } from "@/data/navigation";

const NavbarFeat = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(section);
    if (!element) return;
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth",
    });
  };
  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton href="#contato" variant="primary">
            <div className="flex items-center gap-1">
              <Icon family="Lucide" name="LuCalendarCheck2" size={18} />
              Agendar call
            </div>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              onClick={(event) => {
                onClick(event, item.link);
              }}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
            >
              <div className="flex items-center gap-1">
                <Icon family="Lucide" name="LuCalendarCheck2" size={18} />
                Agendar call
              </div>
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarFeat;

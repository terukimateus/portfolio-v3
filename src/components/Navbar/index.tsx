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

const navItems = [
  { name: "Recursos", link: "features" },
  { name: "Confiança", link: "porque-confiar" },
  { name: "Planos", link: "pricing" },
  { name: "Depoimentos", link: "testimonials" },
  { name: "Instalar", link: "install" },
];

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
        <div className="flex items-center gap-3">
          <NavbarButton
            href="#hero"
            variant="gradient"
            className="bg-linear-to-r from-primary to-primary/80 text-white"
          >
            Criar plano saudável
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
              href="#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="gradient"
              className="bg-linear-to-r from-primary to-primary/80 text-white"
            >
              Criar plano saudável
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarFeat;

import { useEffect, useRef } from 'react';
import { navHtml } from '../../data/sectionHtml';
import SectionRenderer from '../common/SectionRenderer';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const navRoot = navRef.current;
    const collapse = navRoot?.querySelector('#navbarNav');
    const toggler = navRoot?.querySelector('.navbar-toggler');
    const links = Array.from(navRoot?.querySelectorAll('.nav-link') ?? []);

    if (!navRoot || !collapse || !toggler) return undefined;

    const closeMenu = () => {
      collapse.classList.remove('show');
      toggler.setAttribute('aria-expanded', 'false');
    };

    const handleLinkClick = (event) => {
      const href = event.currentTarget.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleToggle = () => {
      const isOpen = collapse.classList.contains('show');
      if (isOpen) {
        closeMenu();
      } else {
        collapse.classList.add('show');
        toggler.setAttribute('aria-expanded', 'true');
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    };

    toggler.addEventListener('click', handleToggle);
    links.forEach((link) => link.addEventListener('click', handleLinkClick));
    window.addEventListener('resize', handleResize);

    return () => {
      toggler.removeEventListener('click', handleToggle);
      links.forEach((link) => link.removeEventListener('click', handleLinkClick));
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={navRef}>
      <SectionRenderer html={navHtml} />
    </div>
  );
};

export default Navbar;

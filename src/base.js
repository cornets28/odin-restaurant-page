const elements = {
  content: document.querySelector('.content'),
  header: document.createElement('header'),
  headerLogo: document.createElement('div'),
  img: document.createElement('img'),
  main: document.createElement('main'),
  about: document.createElement('div'),
  menu: document.createElement('div'),
  contact: document.createElement('div'),
  footer: document.createElement('footer'),
  footerSpan: document.createElement('span'),
};

const base = (() => {
  // HEADER
  elements.header.classList.add('header');
  elements.headerLogo.classList.add('header__logo');
  elements.img.src = 'dist/images/logo.png';
  elements.headerLogo.appendChild(elements.img);
  elements.header.appendChild(elements.headerLogo);
  elements.content.appendChild(elements.header);

  // / MAIN
  elements.main.classList.add('main');
  elements.about.classList.add('tab', 'tab__about');
  elements.about.textContent = 'about';
  elements.menu.classList.add('tab', 'tab__menu');
  elements.menu.textContent = 'menu';
  elements.contact.classList.add('tab', 'tab__contact');
  elements.contact.textContent = 'contact';
  elements.main.appendChild(elements.about);
  elements.main.appendChild(elements.menu);
  elements.main.appendChild(elements.contact);
  elements.content.appendChild(elements.main);

  // / FOOTER
  elements.footer.classList.add('footer');
  elements.footerSpan.textContent = ' Restaurant Lakay ';
  elements.footer.appendChild(elements.footerSpan);
  elements.content.appendChild(elements.footer);
})();

export default { elements, base };

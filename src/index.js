import base, { elements } from './base';

import { paragraph } from './about';
import { gallary } from './menu';
import { contact } from './contact';

const tabs = ['about', 'menu', 'contact'];
elements.main.appendChild(paragraph);


const activeState = (tab) => {
  for (const key of tabs) {
    elements[key].classList.remove('activeState');
  }
  elements[tab].classList.add('activeState');
};

const loadAbout = () => {
  elements.main.removeChild(elements.main.lastChild);
  elements.main.appendChild(paragraph);
  activeState('about');
};

const loadMenu = () => {
  elements.main.removeChild(elements.main.lastChild);
  elements.main.appendChild(gallary);
  activeState('menu');
};

const loadContact = () => {
  elements.main.removeChild(elements.main.lastChild);
  elements.main.appendChild(contact);
  activeState('contact');
};

loadAbout();

elements.about.addEventListener('click', loadAbout);
elements.menu.addEventListener('click', loadMenu);
elements.contact.addEventListener('click', loadContact);

const main = document.querySelector('.main-section');
const form = document.querySelector('.form');
const contact = document.querySelector('.contact');

const lists = document.getElementById('list-li');
const addnew = document.getElementById('addnew-li');
const cPage = document.getElementById('contact-li');

function toggleSections(link1, link2, link3) {
  link1.classList.remove('hide');
  link2.classList.add('hide');
  link3.classList.add('hide');
}

function toggleActive(link1, link2, link3) {
  link1.classList.add('active');
  link2.classList.remove('active');
  link3.classList.remove('active');
}

lists.addEventListener('click', () => {
  toggleSections(main, form, contact);
  toggleActive(lists, cPage, addnew);
});

addnew.addEventListener('click', () => {
  toggleSections(form, main, contact);
  form.classList.remove('hide-onload');
  toggleActive(addnew, lists, cPage);
});

cPage.addEventListener('click', () => {
  toggleSections(contact, main, form);
  contact.classList.remove('hide-onload');
  toggleActive(cPage, lists, addnew);
});

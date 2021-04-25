import createForm from './form';

const contentdiv = document.querySelector('.content');

const form = createForm();
const formdiv = document.createElement('div');
formdiv.setAttribute('class', 'border-deco p-10');
formdiv.appendChild(form);

const tododiv = document.createElement('div');
tododiv.setAttribute('id', 'todo');

const newitembtn = document.createElement('button');
newitembtn.setAttribute('id', 'todo-btn');
newitembtn.setAttribute('class', 'float-r');
newitembtn.innerText = 'Create new Item';


const newprojdiv = document.createElement('div');
newprojdiv.setAttribute('id', 'newprojdiv');
newprojdiv.setAttribute('class', 'border-deco p-10 mb-10 txt-align-c');

const newprojbtn = document.createElement('button');
newprojbtn.setAttribute('id', 'newproj-btn');
newprojbtn.setAttribute('class', 'mr-10');
newprojbtn.innerText = 'Add New Project';

const projinput = document.createElement('input');
projinput.setAttribute('id', 'projinput');
projinput.setAttribute('type', 'text');

newprojdiv.appendChild(newprojbtn);
newprojdiv.appendChild(projinput);

export {
  contentdiv, tododiv, formdiv, newitembtn, newprojbtn, projinput, newprojdiv,
};
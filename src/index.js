import { getProjects, saveProjects } from './localstorage';
import Project from './proj_module';
import toDO from './todoObj';
import {
  contentdiv, tododiv, formdiv, newitembtn, newprojdiv, newprojbtn, projinput,
} from './DOMelements';
import '../stylesheets/css-reset.css';
import '../stylesheets/styles.css';

let projlist = [];

contentdiv.appendChild(newprojdiv);
contentdiv.appendChild(formdiv);

contentdiv.appendChild(tododiv);

const projcat = document.getElementById('projcat');

const populateProjcat = () => {
  projcat.innerHTML = '';
  for (let i = 0; i < projlist.length; i += 1) {
    const cat = document.createElement('option');
    cat.text = projlist[i].proj_name;
    cat.value = projlist[i].proj_name;
    projcat.add(cat);
  }
};

const newProj = () => {
  const newproj = new Project(projinput.value);
  projlist.push(newproj);
  saveProjects(projlist);
  populateProjcat();
};

const dispTaskItems = () => {
  const tbl = document.createElement('table');
  tbl.setAttribute('id', 'disptbl');
  const trh = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.innerText = 'Project';
  const th2 = document.createElement('th');
  th2.innerText = 'Title';
  const th3 = document.createElement('th');
  th3.innerText = 'Description';
  const th4 = document.createElement('th');
  th4.innerText = 'Due Date';
  const th5 = document.createElement('th');
  th5.innerText = 'Priority';
  const th6 = document.createElement('th');
  th6.innerText = 'Select for update';
  const th7 = document.createElement('th');
  th7.innerText = 'Delete';
  trh.appendChild(th1);
  trh.appendChild(th2);
  trh.appendChild(th3);
  trh.appendChild(th4);
  trh.appendChild(th5);
  trh.appendChild(th6);
  trh.appendChild(th7);
  tbl.appendChild(trh);

  for (let i = projlist.length - 1; i >= 0; i -= 1) {
    for (let j = projlist[i].todolist.length - 1; j >= 0; j -= 1) {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.innerText = `${projlist[i].proj_name}`;
      const td2 = document.createElement('td');
      td2.innerText = `${projlist[i].todolist[j].title}`;
      const td3 = document.createElement('td');
      td3.innerText = `${projlist[i].todolist[j].desc}`;
      const td4 = document.createElement('td');
      td4.innerText = `${projlist[i].todolist[j].ddate}`;
      const td5 = document.createElement('td');
      td5.innerText = `${projlist[i].todolist[j].priority}`;
      const td6 = document.createElement('td');

      const updbtn = document.createElement('button');
      updbtn.hidden = true;
      updbtn.setAttribute('class', 'updatebuttons');
      updbtn.setAttribute('id', `updbtn${i}-${j}`);
      updbtn.innerText = 'Update';
      updbtn.addEventListener('click', () => { //eslint-disable-line
        projlist[i].todolist[j].title = document.getElementById('title').value;
        projlist[i].todolist[j].desc = document.getElementById('desc').value;
        projlist[i].todolist[j].ddate = document.getElementById('ddate').value;
        projlist[i].todolist[j].priority = document.getElementById('priority').value;
        newitembtn.hidden = false;
        dispTaskItems();
      });
      const selectbtn = document.createElement('button');
      selectbtn.setAttribute('id', `selectbtn${i}-${j}`);
      selectbtn.innerText = 'Select';
      selectbtn.addEventListener('click', () => { //eslint-disable-line
        const updbuttons = document.getElementsByClassName('updatebuttons');
        for (let x = 0; x < updbuttons.length; x += 1) {
          updbuttons[x].hidden = true;
        }
        document.getElementById('title').value = projlist[i].todolist[j].title;
        document.getElementById('desc').value = projlist[i].todolist[j].desc;
        document.getElementById('ddate').value = projlist[i].todolist[j].ddate;
        document.getElementById('priority').value = projlist[i].todolist[j].priority;

        document.getElementById(`updbtn${i}-${j}`).hidden = false;
        newitembtn.hidden = true;
      });

      td6.appendChild(selectbtn);
      td6.appendChild(updbtn);

      const td7 = document.createElement('td');

      const delbtn = document.createElement('button');
      delbtn.setAttribute('id', `delbtn${i}-${j}`);
      delbtn.innerText = 'Delete';
      delbtn.addEventListener('click', () => {
        deleteProjItem(i, j); //eslint-disable-line
      });
      td7.appendChild(delbtn);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tr.appendChild(td7);
      tbl.appendChild(tr);
    }
  }

  tododiv.innerHTML = '';
  tododiv.appendChild(tbl);
};

const deleteProjItem = (i, j) => {
  projlist[i].todolist.splice(j, 1);
  saveProjects(projlist);
  dispTaskItems();
};

const addProjItem = () => {
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const ddate = document.getElementById('ddate').value;
  const priority = document.getElementById('priority').value;

  const todoitem = toDO(title, desc, ddate, priority);
  for (let i = 0; i < projlist.length; i += 1) {
    if (projlist[i].proj_name === projcat.value) {
      projlist[i].todolist.push(todoitem);
    }
  }
  saveProjects(projlist);
  dispTaskItems();
};


projlist = getProjects();

if (!projlist) {
  const proj = new Project('default');
  projlist.push(proj);
}

populateProjcat();
dispTaskItems();

const submit = document.getElementById('submitbtn');
submit.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const ddate = document.getElementById('ddate').value;
  if (title !== '' && desc !== '' && ddate !== '') {
    addProjItem();
  }
});

newprojbtn.addEventListener('click', () => {
  newProj();
});

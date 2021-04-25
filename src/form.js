function createForm() {
  const form = document.createElement('form');
  // form.setAttribute("method","post");
  // Title
  const titlelabel = document.createElement('label');
  titlelabel.innerText = 'Title: ';

  const titleinput = document.createElement('input');
  titleinput.setAttribute('id', 'title');
  titleinput.setAttribute('type', 'text');
  titleinput.setAttribute('name', 'title');
  titleinput.setAttribute('placeholder', 'Title of Task');
  titleinput.setAttribute('required', 'true');
  titleinput.setAttribute('maxlength', '10');
  titleinput.setAttribute('class', 'mr-10 w-100px');
  // desc
  const desclabel = document.createElement('label');
  desclabel.innerText = 'Description: ';

  const descinput = document.createElement('input');
  descinput.setAttribute('id', 'desc');
  descinput.setAttribute('type', 'text');
  descinput.setAttribute('name', 'desc');
  descinput.setAttribute('placeholder', 'Description of Task');
  descinput.setAttribute('required', 'true');
  descinput.setAttribute('maxlength', '50');
  descinput.setAttribute('class', 'mr-10');

  // due date

  const datelabel = document.createElement('label');
  datelabel.innerText = 'Due Date: ';

  const dateinput = document.createElement('input');
  dateinput.setAttribute('id', 'ddate');
  dateinput.setAttribute('type', 'date');
  dateinput.setAttribute('name', 'date');
  dateinput.setAttribute('required', 'true');
  dateinput.setAttribute('class', 'mr-10 w-120px');

  // Priority
  const prioritylabel = document.createElement('label');
  prioritylabel.innerText = 'Priority: ';

  const priorityinput = document.createElement('select');
  priorityinput.setAttribute('id', 'priority');
  priorityinput.setAttribute('name', 'priority');
  priorityinput.setAttribute('class', 'mr-10 w-50px');

  const optionhigh = document.createElement('option');
  optionhigh.text = 'High';
  optionhigh.value = 'high';

  priorityinput.add(optionhigh);

  const optionmed = document.createElement('option');
  optionmed.text = 'Medium';
  optionmed.value = 'medium';
  optionmed.selected = 'true';
  priorityinput.add(optionmed);

  const optionlow = document.createElement('option');
  optionlow.text = 'low';
  optionlow.value = 'low';
  priorityinput.add(optionlow);

  const projlabel = document.createElement('label');
  projlabel.setAttribute('id', 'projlabel');
  projlabel.setAttribute('class', 'mr-10');
  projlabel.innerText = 'Select Project: ';

  const projcat = document.createElement('select');
  projcat.setAttribute('id', 'projcat');
  projcat.setAttribute('class', 'mr-10 ');

  const submitbtn = document.createElement('input');
  submitbtn.setAttribute('type', 'submit');
  submitbtn.setAttribute('id', 'submitbtn');
  submitbtn.value = 'Submit';

  form.appendChild(projlabel);
  form.appendChild(projcat);
  form.appendChild(titlelabel);
  form.appendChild(titleinput);
  form.appendChild(desclabel);
  form.appendChild(descinput);
  form.appendChild(datelabel);
  form.appendChild(dateinput);
  form.appendChild(prioritylabel);
  form.appendChild(priorityinput);
  form.appendChild(submitbtn);

  return form;
}

export default createForm;
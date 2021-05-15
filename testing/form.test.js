import createForm from '../src/form';

describe('Test the create form function', () => {
  const form = createForm();
  const arr = [];
  for (let i = 0; i < form.childNodes.length; i += 1) {
    arr.push(form.childNodes[i].nodeName);
  }

  it('Form has child nodes', () => {
    expect(form.hasChildNodes).toBeTruthy();
  });

  it('The no of child nodes is 11', () => {
    expect(form.childElementCount).toEqual(11);
  });

  it('The child nodes have LABEL elements', () => {
    expect(arr).toContain('LABEL');
  });

  it('The child nodes have INPUT elements', () => {
    expect(arr).toContain('INPUT');
  });

  it('The child nodes have SELECT elements', () => {
    expect(arr).toContain('SELECT');
  });
});
const GetProjects = () => {
  const str = localStorage.getItem('projlist');
  const projlist = JSON.parse(str);
  return projlist;
};

const SaveProjects = (projlist) => {
  const str = JSON.stringify(projlist);
  localStorage.setItem('projlist', str);
};

export { GetProjects, SaveProjects };
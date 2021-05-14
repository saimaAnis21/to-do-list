const getProjects = () => {
    const str = localStorage.getItem('projlist');
    let projlist = JSON.parse(str);
    return projlist;
  };

const saveProjects = (projlist) => {
    const str = JSON.stringify(projlist);
    localStorage.setItem('projlist', str);
  }; 

export { getProjects, saveProjects };
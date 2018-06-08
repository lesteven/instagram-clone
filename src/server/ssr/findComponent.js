import { StaticRouter as Router, matchPath } from 'react-router';
import topLevel from '../../common/routes';


const getPath = (req, path) => {
  return matchPath(req.url, { path, exact:true, strict: false });
}

const getArr = (req) => {
  let urlArr = req.url.split('/');
  return urlArr.filter( word => word.length > 1);
}

const iterateRoutes = (req, level) => {
  let foundPath = null;
  let foundComponent = level.routes.find(({ prefix, path }) => {
    let compURL = prefix + path;
//  console.log('compURL', compURL);
    foundPath = getPath(req, compURL);       

    return foundPath;
  }) || {};

  foundComponent.foundPath = foundPath;
  return foundComponent;
}

const getComponent = (req) => {
  const urlArr = getArr(req);

  // react router setup
  let wrapper = {};

  // grab path that matches with req.url along with component
  // check top level router

  let { path, component, foundPath } = iterateRoutes(req,topLevel);


  // check for react component and fetch data
  if (!component) {
    component = {};
  }
  if (!component.fetchData) {
    component.fetchData = () => new Promise(resolve => resolve());
  }

  wrapper.foundPath = foundPath;
  wrapper.component = component;

  return wrapper;
}

export default getComponent;

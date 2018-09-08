import { matchPath } from 'react-router';
import masterRoutes from '../../common/masterRoutes';


const getPath = (req, path) => matchPath(
  req.url,
  { path, exact: true, strict: false },
);

const iterateRoutes = (req, level) => {
  let foundPath = null;

  const foundComponent = level.find(({ prefix, path }) => {
    const compURL = prefix + path;
    foundPath = getPath(req, compURL);
    return foundPath;
  }) || {};

  foundComponent.foundPath = foundPath;
  return foundComponent;
};


const findComponent = (req) => {
  const wrapper = {};

  const { component, foundPath } = iterateRoutes(req, masterRoutes);

  wrapper.foundPath = foundPath;
  wrapper.component = component;

  return wrapper;
};

export default findComponent;

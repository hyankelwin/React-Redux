import { StackActions, NavigationActions } from 'react-navigation';

let instance;

function setContainer(container) {
  if (container) {
    instance = container;
    console.log('[NavigatorService] Instance setted!');
  }
}

function dispatch(...args) {
  if (!instance) {
    throw new Error('[NavigatorService] Trying to dispatch task to container when there is no container...');
  }

  return instance.dispatch(...args);
}

function reset(routeName, params = {}) {
  dispatch(StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName,
        params,
      }),
    ],
  }));
}

function navigate(routeName, params) {
  dispatch(NavigationActions.navigate({
    type: 'Navigation/NAVIGATE',
    routeName,
    params,
  }));
}

export default {
  dispatch,
  reset,
  navigate,
  setContainer
};

export {
  dispatch,
  reset,
  navigate,
  setContainer
};

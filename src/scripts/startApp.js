import buttons from './helpers/buttons';
import domEvents from './domEvents';
import domBuilder from './helpers/domBuilder';

const startApp = () => {
  domBuilder();
  buttons();
  domEvents();
};

export default startApp;

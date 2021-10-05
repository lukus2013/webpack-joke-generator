import clearDom from './clearDom';

const buttons = () => {
  clearDom();
  document.querySelector('#buttons').innerHTML = `
  <h1>Welcome!</h1>
   <button type="button" id = "get-joke-btn" class="btn btn-success">Get a Joke</button>
 `;
};

export default buttons;

import clearDom from './helpers/clearDom';
import { getJoke, setJokeData, jokeData } from './helpers/jokeData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // eslint-disable-next-line no-empty
    if (e.target.id.includes('get-joke-btn')) {
      getJoke().then((object) => {
        setJokeData(object);
        document.querySelector('#setup').innerHTML = `
        <h1>${jokeData.setup}</h1>
         `;
        document.querySelector('#buttons').innerHTML = `
         <button type="button" id= "get-punchline-btn" class="btn btn-primary">Get the Punchline</button>
         `;
      });
    }

    if (e.target.id.includes('get-punchline-btn')) {
      document.querySelector('#punchline').innerHTML = `
        <h1>${jokeData.delivery}</h1>
        `;
      document.querySelector('#buttons').innerHTML = `
        <button type="button" id = "get-new-joke-btn" class="btn btn-warning">Get a New Joke</button>
        `;
    }

    if (e.target.id.includes('get-new-joke-btn')) {
      clearDom();
      getJoke().then((object) => {
        setJokeData(object);
        document.querySelector('#setup').innerHTML = `
            <h1>${jokeData.setup}</h1>
             `;
        document.querySelector('#buttons').innerHTML = `
             <button type="button" id= "get-punchline-btn" class="btn btn-primary">Get the Punchline</button>
             `;
      });
    }
  });
};

export default domEvents;

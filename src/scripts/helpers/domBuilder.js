const createDom = () => {
  document.querySelector('#app').innerHTML = `
      <div id="main-container">
      <div id="buttons"></div>
      <div id="setup"></div>
      <div id="punchline"></div>
      </div>`;
};

export default createDom;

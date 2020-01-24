(() => {
  console.log('hello from JS!');

  let allIMGs = document.querySelectorAll("img"),
  allSVGs = document.querySelectorAll("svg");

  function logSVG() {
    console.log(this.id);
  }

  allIMGs.forEach(item => item.addEventListener("click", logSVG));
  allSVGs.forEach(item => item.addEventListener("click", logSVG));

// document.querySelector('h1').textContent = "What is up? I am script";
})();


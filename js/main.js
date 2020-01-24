(() => {
  console.log('hello from JS!');

  let allSVGs = document.querySelectorAll("img");

  function logSVG() {
    console.log(this.id);
  }

  allSVGs.forEach(item => item.addEventListener("click", logSVG));

// document.querySelector('h1').textContent = "What is up? I am script";
})();


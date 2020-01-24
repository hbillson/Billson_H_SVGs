(() => {
  let allIMGs = document.querySelectorAll("img");

  function logSVG() {
    console.log(this.id);
  }

  function toggleSelected() {
    this.classList.toggle('selected');
  }

  allIMGs.forEach(item => item.addEventListener("click", logSVG));
  allIMGs.forEach(item => item.addEventListener("click", toggleSelected));
})();


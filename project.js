var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}


var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
          sidemenu.style.right = "0";
        }
        function closemenu(){
          sidemenu.style.right = "-200px";
        }



const items = document.querySelectorAll('.item:not(:first-child)');
const options = {
  threshold: 0.5
}
function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})



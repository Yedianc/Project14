var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}



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
//-------------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Check if slideIndex is out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Add "active" class to the corresponding dot
  dots[slideIndex - 1].className += " active";
}


//-----------------------contact----------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("validation-form");
  const submitButton = document.getElementById("submit-button");
  const clearButton = document.getElementById("clear-button");
  const modalOverlay = document.getElementById("modal-overlay");
  const successModal = document.getElementById("success-modal");
  const closeModalButton = document.getElementById("close-modal");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    showModal();
    form.reset();
    submitButton.disabled = true;
  });

  closeModalButton.addEventListener("click", function () {
    hideModal();
  });

  function showModal() {
    modalOverlay.style.display = "flex";
    document.body.classList.add("modal-open");
  }

  function hideModal() {
    modalOverlay.style.display = "none";
    document.body.classList.remove("modal-open");
  }
  

  form.addEventListener("input", function () {
    validateForm();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    form.reset();
    submitButton.disabled = true; 
  });

  clearButton.addEventListener("click", function () {
    const inputs = form.querySelectorAll("input[required], textarea[required]");

    inputs.forEach(function (input) {
      input.classList.remove("error");
    });

    form.reset();
    submitButton.disabled = true;

    successMessage.style.display = "none";

  });

  function validateForm() {
    const emailInput = form.querySelector("#email");
    const msgInput = form.querySelector("#msg");
    
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    let isFormValid = true;

    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        isFormValid = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    if (!isValidEmail(emailInput.value.trim())) {
      isFormValid = false;
      emailInput.classList.add("error");
    } else {
      emailInput.classList.remove("error");
    }

    submitButton.disabled = !isFormValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});


//------------------CONTACT------JSON---FORM---INFO----------------------------------------

function collectFormData() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('msg').value


  var formData = {
    "name": name,
    "email": email,
    "msg": message
  };

  var formDataJSON = JSON.stringify(formData);

  console.log(formDataJSON);
}

document.getElementById('submit-button').addEventListener('click', collectFormData);


//-----------------------modal----------------------------------------------------



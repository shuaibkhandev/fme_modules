// Top list links
const top_list_item = document.querySelectorAll(".list_item");

top_list_item.forEach((item) => {
  item.addEventListener("click", function () {
    top_list_item.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});


    // Testimonails Swiper SLider
var swiper = new Swiper(".testimonials_swiper", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
 0: {
  slidesPerView:1,
    spaceBetween: 10,
 },
 576: {
  slidesPerView:2,
  spaceBetween:15,
 },
 992:{
  slidesPerView:3,
  spaceBetween:32
 }
  },
});



// Search
const srch_btn = document.querySelector(".search_desk");
const page_wrapper = document.querySelector(".page_wrapper");
const header = document.querySelector(".header");
const srch_field = document.querySelector(".search_field_head");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".search_overlay");

srch_btn.addEventListener("click", function (event) {
  event.stopPropagation();
  
 
  page_wrapper.classList.add("fixed");
  
  
  this.classList.add("hidden_icons");
  header.classList.add("search_active");
  navigation.classList.add("hide_nav_main");
  srch_field.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
  srch_btn.classList.remove("hidden_icons");
  header.classList.remove("search_active");
  navigation.classList.remove("hide_nav_main");
  srch_field.style.display = "none";
  overlay.style.display = "none";
  page_wrapper.classList.remove("fixed");
});

const searchInput = document.getElementById("search");
const suggestionsList = document.getElementById("suggestions");
const suggestionItems = Array.from(suggestionsList.getElementsByTagName("li")); // Array of all <li> elements

searchInput.addEventListener("input", function () {
  const inputValue = this.value.toLowerCase();

  if (inputValue) {
    suggestionItems.forEach(item => {
      if (item.textContent.toLowerCase().includes(inputValue)) {
        item.style.display = "block"; // Show matching items
      } else {
        item.style.display = "none"; // Hide non-matching items
      }
    });
    suggestionsList.style.display = "block"; // Show suggestions list
  } else {
    suggestionsList.style.display = "none"; // Hide list when input is empty
  }
});

// Hide suggestions when clicking outside the search area
document.addEventListener("click", function (event) {
  if (!searchInput.contains(event.target)) {
    suggestionsList.style.display = "none";
  }
});






// script for support Center Faq (accordion)
const acc = document.querySelectorAll(".accordion");

acc.forEach((question) => {
  question.addEventListener("click", function () {
    this.classList.toggle("active");
   const attribute =  this.getAttribute("aria-expanded") === "true";

   acc.forEach((item)=>{
    if(item != this){
      
      item.setAttribute("aria-expanded", "false");
      const otherPanel = item.nextElementSibling;
      otherPanel.style.maxHeight = null;
      otherPanel.classList.remove("open");
      
    }
   })
   
   this.setAttribute("aria-expanded", !attribute);
   
    var panel = this.nextElementSibling;
    

    if (panel.classList.contains("open")) {
      panel.style.maxHeight = null;
      panel.classList.remove("open");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("open");
    }
  });
});



    const videoPoster = document.getElementById('videoPoster');
    const videoIframe = document.getElementById('videoIframe');

    // Replace 'YOUR_VIDEO_ID' with your actual YouTube video ID
    const videoId = 'ys_fN3uy7bQ';

    videoPoster.addEventListener('click', () => {
      // Set the YouTube video URL with autoplay enabled
      videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

      // Show the iframe and hide the poster
      videoIframe.style.display = 'block';
      videoPoster.style.display = 'none';
    });
    





const footer_title = document.querySelectorAll(".footer_title");
const footer_list = document.querySelectorAll(".footer_list");

function initFooterAccordion() {
  if (window.innerWidth <= 1080) {
    footer_title.forEach((item, index) => {
      item.addEventListener("click", function toggleAccordion() {
        const isActive = this.classList.contains("active");

        // Remove 'active' from all
        footer_title.forEach((t) => t.classList.remove("active"));
        footer_list.forEach((list) => (list.style.display = "none"));

        if (!isActive) {
          this.classList.add("active");
          footer_list[index].style.display = "inline-block";
        }
      });
    });
  } else {
    // Reset styles when back to desktop
    footer_title.forEach((item) => item.classList.remove("active"));
    footer_list.forEach((list) => (list.style.display = "inline-block")); 
  }
}


// Run on load and resize
window.addEventListener("load", initFooterAccordion);
window.addEventListener("resize", initFooterAccordion);
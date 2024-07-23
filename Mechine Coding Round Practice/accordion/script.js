let singleExpandedMode = false;
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", function () {
      // Toggle active class on the accordion item
      item.classList.toggle("active");

      // Check if only one item should be expanded (single expanded mode)
      // Change to true for single item expanded mode
      if (singleExpandedMode) {
        // Collapse all other accordion items except the current one
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
          }
        });
      }
    });
  });
});

function handleClick(cb) {
  singleExpandedMode = cb.checked;
}

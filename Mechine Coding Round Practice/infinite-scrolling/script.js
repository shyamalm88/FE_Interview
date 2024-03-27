const cards = document.querySelectorAll(".card");
const cardWrapper = document.querySelector("ul");

const loadMore = () => {
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerText = "New Card";
    li.classList.add("card");
    cardWrapper.appendChild(li);
  }
};

const lastObserve = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadMore();
  lastObserve.disconnect();
  lastObserve.observe(document.querySelector(".card:last-child"));
});

lastObserve.observe(document.querySelector(".card:last-child"));

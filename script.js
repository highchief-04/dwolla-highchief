document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("n40");
  const targetNumber = 40;
  const duration = 1000; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});
document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("n20");
  const targetNumber = 20;
  const duration = 1500; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});
document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("n121");
  const targetNumber = 121;
  const duration = 1000; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});
document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("n50");
  const targetNumber = 50;
  const duration = 1550; // Animation duration in milliseconds
  const interval = duration / targetNumber;

  let count = 0;

  const incrementCounter = () => {
    counterElement.textContent = count;
    count++;

    if (count <= targetNumber) {
      setTimeout(incrementCounter, interval);
    }
  };

  incrementCounter();
});

// JavaScript to change the image on mouseover
var imageElement = document.getElementById("chevronImg");

imageElement.addEventListener("mouseover", function () {
  // Change the image source on mouseover
  imageElement.src =
    "https://res.cloudinary.com/dn2xrrll5/image/upload/v1706475733/icons8-chevron-up-26_vzdkup.png";
});

imageElement.addEventListener("mouseout", function () {
  // Change the image source back on mouseout (optional)
  imageElement.src =
    "https://res.cloudinary.com/dn2xrrll5/image/upload/v1706475733/icons8-chevron-up-26_1_xsejqd.png";
});

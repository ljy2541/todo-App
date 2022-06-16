const backgroundColor = [
  `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`,
  `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`,
  `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`,
];

const main = document.querySelector("main");
main.style.background = `linear-gradient(46deg, ${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]})`;
main.style.backgroundSize = "600%, 600%";

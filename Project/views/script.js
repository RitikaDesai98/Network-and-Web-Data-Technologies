//make it easier to test layouts
window.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.setProperty("background-color", "GhostWhite");
  document.documentElement.style.setProperty("--bs-body-bg", "GhostWhite");

  setTimeout(() => {
    scrollToBottom("message-container");
  }, 150);
});

const scrollToBottom = (id) => {
  const element = document.getElementById(id);
  element.scrollTop = element.scrollHeight;
};

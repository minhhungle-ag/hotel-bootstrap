const topBarEl = document.getElementById("topBarId");
const logoEl = document.getElementById("logoId");
const scrollToTop = document.getElementById("scrollButton");

function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const debounceFc = debounce(function () {
  const windowHeight = window.scrollY;

  if (windowHeight >= 200) {
    scrollToTop.style.display = "block";
    topBarEl.style.display = "none";
    logoId.style.display = "block";
  } else {
    topBarEl.style.display = "block";
    scrollToTop.style.display = "none";
    logoId.style.display = "none";
  }
}, 300);

function main() {
  window.addEventListener("scroll", debounceFc);
}
main();

function locationHashChanged() {
if(window.location.hash) {
  document.getElementById("searchBg").style.display = "none";
  document.getElementById("homeHero").style.display = "none";
}
}
window.onload = locationHashChanged;
window.onhashchange = locationHashChanged;
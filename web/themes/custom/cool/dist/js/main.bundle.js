/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
document.querySelectorAll('.nav-item.dropdown > a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const controlsId = link.getAttribute('aria-controls');
    const panel = document.getElementById(controlsId);
    const parent = link.parentElement;

    if (panel) {
      if (!panel.classList.contains('is-active')) {
        panel.classList.add('is-active');
        parent.classList.add('tab-active');
        link.setAttribute('aria-expanded', 'true');
      } else {
        // If open, allow navigation to the parent link
        panel.classList.remove('is-active');
        parent.classList.remove('tab-active');
        link.setAttribute('aria-expanded', 'false');
      }
      e.preventDefault();
    }
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nvb2wvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0uZHJvcGRvd24gPiBhJykuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xyXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgY29udHJvbHNJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJyk7XHJcbiAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRyb2xzSWQpO1xyXG4gICAgY29uc3QgcGFyZW50ID0gbGluay5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYW5lbCkge1xyXG4gICAgICBpZiAoIXBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWFjdGl2ZScpO1xyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiBvcGVuLCBhbGxvdyBuYXZpZ2F0aW9uIHRvIHRoZSBwYXJlbnQgbGlua1xyXG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCd0YWItYWN0aXZlJyk7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgfVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
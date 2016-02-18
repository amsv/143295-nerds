var open = document.querySelector(".feedback-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-circle-btn");
var cancel = popup.querySelector(".feedback-cancel");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

open.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
});
cancel.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
});

form.addEventListener("submit", function (event) {
    localStorage.setItem("login", login.value);
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
        }
    }
});

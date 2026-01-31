// Location & Delivery Hours Button
let delivery_hours_btn = document.querySelector(".delivery-hours-btn");

if (delivery_hours_btn) {
  let location_popup_wrapper = document.querySelector(
    ".location-popup-wrapper"
  );
  let location_popup = document.querySelector(".location-popup");

  let location_popup_close_btn = document.querySelector(
    ".location-popup-close-btn"
  );

  delivery_hours_btn.addEventListener("click", function () {
    location_popup_wrapper.classList.toggle("active");
  });

  location_popup_close_btn.addEventListener("click", function () {
    location_popup_wrapper.classList.remove("active");
  });

  location_popup_wrapper.addEventListener("click", function (e) {
    if (!location_popup.contains(e.target)) {
      location_popup_wrapper.classList.remove("active");
    }
  });
}

// Login Modal
let login_modal_btn = document.querySelectorAll(".login-modal-btn");
if (login_modal_btn) {
  let login_modal = document.querySelector(".login-modal");
  let login_modal_in = document.querySelector(".login-modal-in");
  let login_modal_close_btn = document.querySelector(".login-modal-close-btn");

  login_modal_btn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      login_modal.classList.toggle("active");
    });
  });

  login_modal_close_btn.addEventListener("click", function () {
    login_modal.classList.remove("active");
  });

  login_modal.addEventListener("click", function (e) {
    if (!login_modal_in.contains(e.target)) {
      login_modal.classList.remove("active");
    }
  });
}

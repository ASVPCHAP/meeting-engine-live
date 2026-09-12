import "./style.css";

// Booking URL for every [data-cta="book"] button.
const CALENDAR_URL = "https://calendar.app.google/TCpfvJbdjaDGkpsa8";

document.querySelectorAll('[data-cta="book"]').forEach((el) => {
  el.setAttribute("href", CALENDAR_URL);
});

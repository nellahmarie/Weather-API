const dateSelect = document.getElementById("date-select");
const availabilityStatus = document.getElementById("availability-status");

dateSelect.addEventListener("change", () => {
  const selectedDate = dateSelect.value;

  // Make an AJAX request to check availability
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "check_availability.js", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const availability = xhr.responseText;

      // Update the availability status message
      availabilityStatus.textContent = availability;
      availabilityStatus.classList.remove("availability-available", "availability-unavailable");
      availabilityStatus.classList.add(`availability-${availability.toLowerCase()}`);
    }
  };
  xhr.send(`selected_date=${selectedDate}`);
});

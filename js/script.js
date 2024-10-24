document.addEventListener("DOMContentLoaded", function () {
  // Greeting with user input
  const greeting = document.getElementById("greeting");
  const nameInput = prompt("Please enter your name:");
  greeting.textContent = `Hi ${nameInput || "Guest"}, Welcome to Website`;

  // Form validation and output
  const form = document.getElementById("messageForm");
  const formOutput = document.getElementById("formOutput");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("pesan").value; // Memperbaiki pengambilan nilai

    // Ambil waktu saat ini
    const currentTime = new Date().toString(); // Format default Date()

    // Display the submitted data with a newline
    formOutput.innerHTML = `
    <p><strong>Current Time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${date}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
    `;
  });
});

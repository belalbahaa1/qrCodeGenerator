const wrapper = document.querySelector(".wrapper"),
  generateBtn = document.querySelector(".form button"),
  qrInput = document.querySelector(".form input"),
  qrImg = document.querySelector(".qr-code img"),
  warning = document.querySelector(".warning");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) {
    warning.textContent = "Please enter a value";
  } else {
    warning.textContent = "";
    generateBtn.textContent = "Generating...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
      wrapper.classList.add("active");
      generateBtn.textContent = "Generate QR Code";
      qrInput.value = "";
    });
    // clear input
    qrInput.value = "";
  }
});

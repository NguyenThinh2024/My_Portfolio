emailjs.init({
  publicKey: "dFZRVWM_IsCRgCwmK",
});

function sendMail(e) {
  e.preventDefault();

  const params = {
    first_name: document.getElementById("firstName").value,
    last_name: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_366p9vf", "template_xynxn44", params, "dFZRVWM_IsCRgCwmK")
    .then(() => {
      alert("Gửi thành công 🔥");
    })
    .catch((err) => {
      alert("Lỗi: " + err.text);
    });
}
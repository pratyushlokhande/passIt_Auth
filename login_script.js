function cache() {
  // Get values from input fields
  const uname = document.querySelector("#uname").value;

  // Get Values from Local Storage
  const username = localStorage.getItem(uname);

  if (username) {
    const form = document.querySelector(".form");
    form.style.display = "none";
    const msg = document.querySelector(".msg");
    msg.innerHTML = `Hello ${uname} 😁`;
  } else {
    const form = document.querySelector(".form");
    form.style.display = "none";
    const msg = document.querySelector(".msg");
    msg.innerHTML = `<span>${uname} 🤐... you need to <a href="./pssIt.html">Sign Up</a> first !!</span>`;
  }
}

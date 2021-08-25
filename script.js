function cache() {
  // Get values from input fields
  const uname = document.querySelector("#uname").value;
  const pass = document.querySelector("#pass").value;

  // Get Values from Local Storage
  const username = localStorage.getItem(uname);

  if (username) {
    if (username === pass) {
      const url = new URL(window.location.href);
      window.location.replace(`${url.origin}/passIt_Auth/passIt_login.html`);
    }
  } else {
    localStorage.setItem(uname, pass);
  }
}

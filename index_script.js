function href(ref) {
  const url = new URL(window.location.href);
  window.location.replace(`${url.origin + ref}`);
}

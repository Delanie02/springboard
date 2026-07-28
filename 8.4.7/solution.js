document.addEventListener("mousemove", function (e) {
  const r = Math.floor((e.pageX * 255) / window.innerWidth);
  const b = Math.floor((e.pageY * 255) / window.innerHeight);
  document.body.style.backgroundColor = `rgb(${r}, 0, ${b}`;
  console.log(r, b);
});

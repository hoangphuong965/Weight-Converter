document.getElementById('lbs').addEventListener('input', function (e) {
  let p = e.target.value;
  document.getElementById('gramsOutput').innerHTML = p * 453.59237;
  document.getElementById('kgOutput').innerHTML = p * 0.45359237;
  document.getElementById('ozOutput').innerHTML = p * 16;
});

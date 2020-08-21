const form = document.getElementById('bat');
const target = document.querySelectorAll('.batting');
form.addEventListener('submit', function(event){
  event.preventDefault();
  const game = document.getElementById('game').value;
  const atBats = document.getElementById('atBats').value;
  const run = document.getElementById('runs').value;
  const hits = document.getElementById('hits').value;
  const b2 = document.getElementById('2b').value;
  const b3 = document.getElementById('3b').value;
  const hr = document.getElementById('hr').value;
  const b1 = hits - b2 - b3 - hr;
  const rbi = document.getElementById('rbi').value;
  const bb = document.getElementById('bb').value;
  const k = document.getElementById('k').value;
  const hbp = document.getElementById('hbp').value;
  const $avg = document.getElementById('avg');
  const $obp = document.getElementById('obp');
  const $slg = document.getElementById('slg');
  const $ops = document.getElementById('ops');
  
  let avg = hits / atBats;
  let obp = (hits + bb + hbp) / (atBats + bb + hbp);
  let slg = (b1+(b2*2)+(b3*3)+(hr*4)) / atBats;
  avg = String(avg).substring(0, 5);
  obp = String(obp).substring(0, 5);
  slg = String(slg).substring(0, 5);
  let ops = Number(obp)+Number(slg);
  ops = String(ops).substring(0, 5);

  $avg.textContent = avg;
  $obp.textContent = obp;
  $slg.textContent = slg;
  $ops.textContent = ops;

  console.log(avg);
});
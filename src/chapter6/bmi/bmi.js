window.onload = ()=>{
  document.getElementById('button').onclick = () => {
    const h = parseFloat(document.getElementById('height').value);
    const w = parseFloat(document.getElementById('weight').value);
    const bmi = document.getElementById('bmi');
    bmi.innerHTML = (w/h/h).toFixed(1);
  };
};

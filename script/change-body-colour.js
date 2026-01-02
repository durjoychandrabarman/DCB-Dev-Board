const colors = ['lightcyan', 'bisque', 'cornsilk', 'pink']; // colour er array ai ta
let clickCount = 0; // click counter

document.getElementById('colorBtn').addEventListener('click', function() {
  clickCount++; // click ek ek kore ++

  // colour index নির্ধারণ
  let colorIndex = clickCount - 1; // 1m click = index 0

  // চেক করা, যদি clickCount > 4 হয়, আবার শেষের রঙ রাখতে chai
  if(colorIndex >= colors.length){
    colorIndex = colors.length - 1;
  }

  // body background color change
  document.body.style.backgroundColor = colors[colorIndex];
});
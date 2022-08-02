function tom1() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  document.getElementById("wbutton").style.transform = "scale(.95)";
  setTimeout(function() {
    document.getElementById("wbutton").style.transform = "scale(1)";
  }, 100);
}

document.addEventListener('keydown', () => {
  let isWKey = event.key === "w" || event.key === "W";
  if (isWKey) {
    tom1();
  }
});

function tom2() {
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
  document.getElementById("abutton").style.transform = "scale(.95)";
  setTimeout(function() {
    document.getElementById("abutton").style.transform = "scale(1)";
  }, 100);
}

document.addEventListener('keydown', () => {
  let isAKey = event.key === "a" || event.key === "A";
  if (isAKey) {
    tom2()
  }
});

function tom3() {
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
  document.getElementById("sbutton").style.transform = "scale(.95)";
  setTimeout(function() {
    document.getElementById("sbutton").style.transform = "scale(1)";
  }, 100);
}

document.addEventListener('keydown', () => {
  let isSKey = event.key === "s" || event.key === "S";
  if (isSKey) {
    tom3()
  }
});

function tom4() {
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
  document.getElementById("dbutton").style.transform = "scale(.95)";
  setTimeout(function() {
    document.getElementById("dbutton").style.transform = "scale(1)";
  }, 100);
}

document.addEventListener('keydown', () => {
  let isDKey = event.key === "d" || event.key === "D";
  if (isDKey) {
    tom4()
  }
});

function snare() {
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
  document.getElementById("jbutton").style.transform = "scale(.95)";
  setTimeout(function() {
    document.getElementById("jbutton").style.transform = "scale(1)";
  }, 100);
}

document.addEventListener('keydown', () => {
  let isJKey = event.key === "j" || event.key === "J";
  if (isJKey) {
    snare()
  }
});

function crash() {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  document.getElementById("kbutton").style.transform = "scale(.95)";
  setTimeout(function() {
    document.getElementById("kbutton").style.transform = "scale(1)";
  }, 100);
}

document.addEventListener('keydown', () => {
  let isKKey = event.key === "k" || event.key === "K";
  if (isKKey) {
    crash()
  }
});

function kick() {
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
  document.getElementById("lbutton").style.transform = "scale(.95)";
  setTimeout(function() {
    document.getElementById("lbutton").style.transform = "scale(1)";
  }, 100);
}

document.addEventListener('keydown', () => {
  let isLKey = event.key === "l" || event.key === "L";
  if (isLKey) {
    kick()
  }
});

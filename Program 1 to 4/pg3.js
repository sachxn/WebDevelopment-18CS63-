// document.getElementById("animationText").style.fontSize = 5;

const fontAnimation = () => {
  let animationText = document.getElementById("animationText");
  //   console.log(document);
  console.log(animationText.style.fontSize);
  if (animationText.style.fontSize == "50pt") {
    animationText.innerText = "TEXT-SHRINKING";
    animationText.style.color = "blue";
  }
  if (animationText.style.fontSize == "5pt") {
    animationText.innerText = "TEXT-GROWING";
    animationText.style.color = "red";
  }
  if (animationText.innerText == "TEXT-GROWING") {
    animationText.style.fontSize =
      parseInt(animationText.style.fontSize) + 5 + "pt";
  }
  if (animationText.innerText == "TEXT-SHRINKING") {
    animationText.style.fontSize =
      parseInt(animationText.style.fontSize) - 5 + "pt";
  }
};

setInterval(fontAnimation, 100);

const leftMostVowel = (str, event) => {
  event.preventDefault();
  let res = -1;
  for (i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        res = i;
        break;
      default:
        break;
    }
  }
  let h1 = document.createElement("h1");
  if (res != -1) h1.innerText = "Position of Left Most Vowel " + res;
  else h1.innerText = "No Vowels Found";
  document.getElementById("result").appendChild(h1);
};

const reverseNum = (num, event) => {
  event.preventDefault();
  console.log(num);
  let rev = Number(String(num).split("").reverse().join(""));
  let h1 = document.createElement("h1");
  h1.innerText = "Reversed Number is " + rev;
  document.getElementById("result").appendChild(h1);
};

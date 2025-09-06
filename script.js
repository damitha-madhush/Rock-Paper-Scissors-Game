function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("userChoice").textContent = "You chose: " + userChoice;
  document.getElementById("computerChoice").textContent = "Computer chose: " + computerChoice;

  let winner = "";

  if (userChoice === computerChoice) {
    winner = "It's a tie! 🤝";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You win! 🎉";
  } else {
    winner = "Computer wins! 🤖";
  }

  document.getElementById("winner").textContent = winner;
}

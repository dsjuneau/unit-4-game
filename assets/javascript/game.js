// Crystal Collector game

// Variables

// Game Object

var game = {
  randomNumber: 0,
  score: 0,
  wins: 0,
  losses: 0,
  ruby: null,
  diamond: null,
  yellow: null,
  emerald: null,
  initiate: function() {
    this.randomNumber = 19 + Math.floor(Math.random() * 102);
    this.ruby = 1 + Math.floor(Math.random() * 12);
    this.diamond = 1 + Math.floor(Math.random() * 12);
    this.yellow = 1 + Math.floor(Math.random() * 12);
    this.emerald = 1 + Math.floor(Math.random() * 12);
    this.score = 0;
  },
  updateScreen: function() {
    $(".score2").text(this.score);
    $(".wins").text(this.wins);
    $(".losses").text(this.losses);
    $(".number").text(this.randomNumber);
  },
  updateScore: function(value) {
    switch (value) {
      case "ruby":
        this.score = this.score + this.ruby;
        break;
      case "diamond":
        this.score = this.score + this.diamond;
        break;
      case "yellow":
        this.score = this.score + this.yellow;
        break;
      case "emerald":
        this.score = this.score + this.emerald;
        break;
    }
  },
  checkScore: function() {
    if (this.score > this.randomNumber) {
      this.losses = this.losses + 1;
      this.initiate();
    } else if (this.score === this.randomnumber) {
      this.wins = this.wins + 1;
      this.initiate();
    }
  }
};

// Initial document load
$(document).ready(function() {
  game.initiate();
  game.updateScreen();
});

// On click event
$(".jewel").on("click", function() {
  game.updateScore($(this).attr("value"));
  game.checkScore();
  game.updateScreen();
});

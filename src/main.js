//query selector variables go here 👇
//poster elements👇
var posterImg = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
//page elements 👇
var mainPosterPage = document.querySelector(".main-poster");
var savedPosterPage = document.querySelector(".saved-posters");
var posterFormPage = document.querySelector(".poster-form");
var savedPosterGrid = document.querySelector(".saved-posters-grid");
//buttons 👇
var randomButton = document.querySelector(".show-random");
var viewSavedPostersButton = document.querySelector(".show-saved");
var makePosterButton = document.querySelector(".show-form");
var nevermindButton = document.querySelector(".show-main");
var backToMainButton = document.querySelector(".back-to-main");
var showMyPosterButton = document.querySelector(".make-poster");
var saveThisPosterButton = document.querySelector(".save-poster");
//input
var inputUrl = document.querySelector("#poster-image-url");
var inputTitle = document.querySelector("#poster-title");
var inputQuote = document.querySelector("#poster-quote");
//we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster = new Poster();

//event listeners go here 👇
window.addEventListener('load', randomizePoster);
window.addEventListener('dblclick', deletePoster);
randomButton.addEventListener('click', randomizePoster);
viewSavedPostersButton.addEventListener('click', showSavedPostersPage);
makePosterButton.addEventListener('click', displayFormView);
nevermindButton.addEventListener('click', returnToMain);
backToMainButton.addEventListener('click', returnToMain);
showMyPosterButton.addEventListener('click', submitPosterInfo);
saveThisPosterButton.addEventListener('click', addToSavedPosters);

//functions and event handlers go here 👇
//(we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomizePoster() {
  currentPoster = new Poster(images[getRandomIndex(images)],
  titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)]);
  posterImg.src = currentPoster.imageUrl;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
};

function submitPosterInfo() {
  event.preventDefault();
  getUserInput();
};

function getUserInput() {
  var imageUrl = inputUrl.value;
  var title = inputTitle.value;
  var quote = inputQuote.value;
  addToArray(imageUrl, title, quote);
  displayUserPoster(imageUrl, title, quote);
};

function displayUserPoster(url, title, quote) {
  currentPoster = new Poster(url, title, quote);
  posterImg.src = currentPoster.imageUrl;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
  returnToMain();
};

function addToArray(imageUrl, title, quote) {
  images.push(imageUrl);
  titles.push(title);
  quotes.push(quote);
};

function addToSavedPosters(){
  if(savedPosters.includes(currentPoster)){
    var index = savedPosters.indexOf(currentPoster);
    savedPosters.splice(index, 1);
  }
  savedPosters.push(currentPoster);
};

function showSavedPostersPage() {
  mainPosterPage.classList.add("hidden");
  savedPosterPage.classList.remove("hidden");
  displaySavedPosters();
};

function deletePoster(){
  var index = savedPosters.indexOf(parseInt(event.srcElement.id));
  savedPosters.splice(index, 1);
  displaySavedPosters();
};

function displaySavedPosters() {
  var grid = "";
    for (var i = 0; i < savedPosters.length; i++) {
      grid += `<article class="mini-poster">
      <img class="poster-img" src=${savedPosters[i].imageUrl} id=${savedPosters[i].id} alt="nothin' to see here">
      <h2 class="poster-title">"${savedPosters[i].title}"</h2>
      <h4 class="poster-quote">"${savedPosters[i].quote}"</h4>
      </article>`;
    }
  savedPosterGrid.innerHTML = grid;
};

function displayFormView() {
  posterFormPage.classList.remove("hidden");
  mainPosterPage.classList.add("hidden");
};

function returnToMain() {
  mainPosterPage.classList.remove("hidden");
  if(!posterFormPage.classList.contains("hidden")){
    posterFormPage.classList.add("hidden");
  } else if(!savedPosterPage.classList.contains("hidden")){
    savedPosterPage.classList.add("hidden");
  }
};

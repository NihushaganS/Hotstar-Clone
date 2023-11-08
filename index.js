let movies = [
  {
    name: "Loki",
    des: "In Marvel Studios’ “Loki,” the mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.” Kate Herron directs and Michael Waldron is head writer. Debuts on Disney+ in June 9, 2021",
    image: "./images/slider 1.png"
  },
  {
    name: "Falcon and the winter soldier",
    des: "Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities—and their patience—in Marvel Studios' “The Falcon and The Winter Soldier.” The all-new series is directed by Kari Skogland; Malcolm Spellman is the head writer. Streaming exclusively on Disney+",
    image: "./images/slider 2.png"
  },
  {
    name: "Wanda Vision",
    des: "“WandaVision”, which premieres in early 2021 on Disney+.“WandaVision” marks the first series from Marvel Studios streaming exclusively on Disney+. The series is a blend of classic television and the Marvel Cinematic Universe in which Wanda Maximoff and Vision—two super-powered beings living idealized suburban.",
    image: "./images/slider 3.png"
  },
  {
    name: "RAVA and the last dragon",
    des: "“Raya and the Last Dragon” travels to the fantasy world of Kumandra, where humans and dragons lived together in harmony long ago. Now, 500 years later, that same evil has returned and it's up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    image: "./images/slider 4.png"
  },
  {
    name: "Luca",
    des: "Set in a beautiful seaside town on the Italian Riviera, Disney and Pixar's original feature film “Luca” is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Sea monsters from another world just below the water's surface.",
    image: "./images/slider 5.png"
  }
];

const carousal = document.querySelector('.carousal');
let sliders = [];
let slideIndex = 0; // track the current slide
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  let slide = document.createElement('div');
  var imgElement = document.createElement('img');
  var content = document.createElement('div');
  var h1 = document.createElement('h1');
  var p = document.createElement('p');

  // attach element
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));

  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p); 
  slide.appendChild(content);
  slide.appendChild(imgElement); // added the content to the slide

  carousal.appendChild(slide);
  // settings up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting element classnames
  slide.className = "slider";
  content.className = "slider-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) { // added a condition to check if there are slides
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// video card

const videoCard = [...document.querySelectorAll(".video-card")];

videoCard.forEach(item => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1]; 
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1]; 
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((container, i) => {
  let containerDimensions = container.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click', () => {
    container.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener('click', () => {
    container.scrollLeft -= containerWidth + 200;
  });
});

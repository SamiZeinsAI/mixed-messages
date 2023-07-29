
const adjectives = [
    "clumsy",
    "silly",
    "goofy",
    "enormous",
    "tiny",
    "loud",
    "quiet",
    "lazy",
    "energetic",
    "hilarious"
  ];
  
  const professions = [
    "astronaut",
    "chef",
    "firefighter",
    "teacher",
    "doctor",
    "programmer",
    "engineer",
    "actor",
    "lawyer",
    "artist"
  ];
  
  const funnyActivities = [
    "juggling flamingos",
    "tap dancing on a tightrope",
    "singing opera in the library",
    "eating spaghetti with a straw",
    "doing a handstand on a moving bicycle",
    "playing chess with a monkey",
    "baking cookies in a microwave",
    "swimming in a pool filled with jelly",
    "painting a mural with a toothbrush",
    "trying to catch a fish with a lasso"
  ];
  

const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const randomProfession = professions[Math.floor(Math.random() * professions.length)];
const randomActivity = funnyActivities[Math.floor(Math.random() * funnyActivities.length)];

const joke = `Yo mama is so ${randomAdjective}, when she decided to become a ${randomProfession}, they had her ${randomActivity}.`;

function displayJoke(){
    const body = document.querySelector('body');
    const textElement = document.createElement('h1');
    textElement.innerHTML = joke;
    body.appendChild(textElement);
}
displayJoke();
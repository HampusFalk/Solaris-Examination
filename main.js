var info = "";
var url = "https://majazocom.github.io/Data/solaris.json";


/* VARIABLER SOM LÄNKAR HTML OCH JAVASCRIPT */
var sunpath = document.getElementById("sunsvg");
var planetsContainer = document.getElementById("planetsAndtext");
var aboutPlanet = document.getElementById("aboutPlanet");
var starsContainer = document.getElementById("stars-container");
var planetName = document.getElementById("planetName");
var planetLatinName = document.getElementById("planetLatinName");
var planetDesc = document.getElementById("planetDesc");
var circumference = document.getElementById("circumference");
var maxTemp = document.getElementById("maxTemp");
var distFromSun = document.getElementById("distFromSun");
var minTemp = document.getElementById("minTemp");
var moons = document.getElementById("moons");
var sunBorder1 = document.getElementById("sunBorder1")
var sunBorder2 = document.getElementById("sunBorder2")


for (let i = 0; i < 100; i++) { //for loop som kör igenom loopen 100 gånger och visar dem som stjärnor
  const star = document.createElement("div"); //skapar en div för varje gång for loopen körs
  star.className = "star"; //ger diven ett class namn
  star.style.left = `${Math.random() * 100}%`; //ger en slumpmässig plats på diven på x-axeln av 100% av diven den ligger i
  star.style.top = `${Math.random() * 100}%`; //ger en slumpmässig plats på diven på y-axeln av 100% av diven den ligger i
  starsContainer.append(star); //lägger diven "star" som precis skapats under diven "starContainer"
}

function showInfo(id) { //anropas när man tryckt på en valfri planet
  planetsContainer.style.display = "none"; //gömmer planeterna
  starsContainer.style.display = "flex"; //visar alla stjärnor som skapats i for loopen
  aboutPlanet.style.display = "block"; //visar info-diven för vald planet
  sunBorder1.style.display = "flex" //visar solens "border"
  sunBorder2.style.display = "flex" //visar en till av solens "border"
  sunpath.setAttribute("fill", "#428ED5"); //ändrar solens färg till blå
  showPlanetContent(id) //anropar showPlanetContet functionen
}

function showPlanets() { //anrops när man tryckt någonstan på skrämen så man kommer tillbaka till alla planeter
  planetsContainer.style.display = "flex"; //visar alla planeter
  starsContainer.style.display = "none"; //gömmer alla stjärnor
  aboutPlanet.style.display = "none"; //gömmer info-diven för valda planeten
  sunBorder1.style.display = "none" //gömmer solens "border"
  sunBorder2.style.display = "none" //gömmer den andra av solens "border"
  sunpath.setAttribute("fill", "#FFD029"); //ändrar tillbaka solens färg till gul
}

function showPlanetContent(id) { //anropas i functionen showInfo och lägger rätt text på rätt ställe i HTML för vald planet
  planetName.innerHTML = info[id].name; //namn på planeten
  planetLatinName.innerHTML = info[id].latinName; //latin namn på planeten
  planetDesc.innerHTML = info[id].desc; //information om planeten
  circumference.innerHTML = info[id].circumference + " km" //visar omkretsen om planeten
  maxTemp.innerHTML = info[id].temp.day + "\u00B0C"; //visar temperaturen under dagen på planeten
  distFromSun.innerHTML = info[id].distance + " km"; //visar hur långt det är från solen till planeten
  minTemp.innerHTML = info[id].temp.night + "\u00B0C"; //visar temperaturen under natten på planeten
  var planetmoons = info[id].moons.join(", "); //lägger till ett mellanrum mellan varje måne så den blir "egna" ord
  moons.innerHTML = planetmoons; //visar alla planetens månar
}

//fetchar api så vi kan använda infon till vår HTML sida
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("error");
    }
    return response.json();
  })
  .then((data) => {
    info = data;
    /* console.log(data); */
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

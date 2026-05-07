// === HELPER FUNCTIONS (The "Engine" of your app) ===

// 1. Screen Manager: Hides all screens, shows the one you want
function goToScreen(screenId) {
  var allScreens = document.getElementsByClassName("screen");
  for (var i = 0; i < allScreens.length; i++) {
    allScreens[i].style.display = "none"; // Hide everything
  }
  document.getElementById(screenId).style.display = "block"; // Show target
}

// 2. Image Manager: Hides all planet images on the preview screen
function hideAllPreviewImages() {
  var previewImages = ["imageSunpreview", "imagemercury", "imagevenus", "imagearth", "imageMars", "imageJupiter", "imageSaturn", "imageuranus", "imageneptune", "imagemoon"];
  for (var i = 0; i < previewImages.length; i++) {
    var img = document.getElementById(previewImages[i]);
    if(img) img.style.display = "none";
  }
}


// === NAVIGATION BUTTONS (Basic Clicks) ===

// Login Flow
document.getElementById("buttonlogin").addEventListener("click", function() {
  goToScreen("screenwelcome");
});
document.getElementById("button7").addEventListener("click", function() {
  goToScreen("screenhome");
});
document.getElementById("button5").addEventListener("click", function() {
  goToScreen("screenregister");
});
document.getElementById("button6").addEventListener("click", function() {
  goToScreen("screenlogin");
});

// "Made From" Flow
document.getElementById("button1").addEventListener("click", function() {
  goToScreen("screenmadeusing");
  document.getElementById("imagecodeorglogo").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1280px-Code.org_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail";
});
document.getElementById("buttonback2").addEventListener("click", function() {
  goToScreen("screenhome");
});

// "Facts" Flow
document.getElementById("button4").addEventListener("click", function() {
  goToScreen("screenfact");
});
document.getElementById("buttonback3").addEventListener("click", function() {
  goToScreen("screenhome");
});
document.getElementById("button3").addEventListener("click", function() {
  goToScreen("screenfact2");
});
document.getElementById("buttonback4").addEventListener("click", function() {
  goToScreen("screenhome");
});


// === THE PLANET PREVIEWER (Dropdown Logic) ===

var selectedPlanet = ""; // A variable to remember what the user picked

// Listen for the dropdown changing
document.getElementById("dropdown1").addEventListener("change", function() {
  selectedPlanet = document.getElementById("dropdown1").value;
  console.log("User selected: " + selectedPlanet);
  
  // If they picked a real planet, show the "Next" button. Otherwise, hide it.
  if (selectedPlanet !== "Choose Planet") {
    document.getElementById("button2").style.display = "block";
  } else {
    document.getElementById("button2").style.display = "none";
  }
});

// Listen for the "Next" button (button2) being clicked
document.getElementById("button2").addEventListener("click", function() {
  
  hideAllPreviewImages(); // Clear out the old planet image
  goToScreen("screenpreview"); // Jump to the preview screen
  
  // Check what planet was selected and turn on the right image
  if (selectedPlanet == "Sun") {
    var img = document.getElementById("imageSunpreview");
    img.style.display = "block";
    img.src = "sun-blasts-a-m66-flare.jpg"; // Local file
  } 
  else if (selectedPlanet == "Mercury") {
    var img = document.getElementById("imagemercury");
    img.style.display = "block";
    img.src = "https://cseligman.com/text/planets/mercury081006.jpg";
  } 
  else if (selectedPlanet == "Venus") {
    var img = document.getElementById("imagevenus");
    img.style.display = "block";
    img.src = "https://i.gifer.com/UK7n.gif";
  } 
  else if (selectedPlanet == "Earth") {
    var img = document.getElementById("imagearth");
    img.style.display = "block";
    img.src = "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/5039be67fed83855f6626ecd34b1c753.jpg";
  } 
  else if (selectedPlanet == "Moon") {
    var img = document.getElementById("imagemoon");
    img.style.display = "block";
    img.src = "https://img.freepik.com/premium-photo/beautiful-moon-close-up_94937-201.jpg?size=626&ext=jpg";
  } 
  else if (selectedPlanet == "Mars") {
    var img = document.getElementById("imageMars");
    img.style.display = "block";
    img.src = "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyc3xlbnwwfHwwfHx8MA==&w=1000&q=80";
  } 
  else if (selectedPlanet == "Jupiter") {
    var img = document.getElementById("imageJupiter");
    img.style.display = "block";
    img.src = "https://upload.wikimedia.org/wikipedia/commons/8/84/Hubble_Visible_View_of_Jupiter.jpg";
  } 
  else if (selectedPlanet == "Saturn") {
    var img = document.getElementById("imageSaturn");
    img.style.display = "block";
    img.src = "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0dXJufGVufDB8fDB8fHww&w=1000&q=80";
  } 
  else if (selectedPlanet == "Uranus") {
    var img = document.getElementById("imageuranus");
    img.style.display = "block";
    img.src = "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJhbnVzfGVufDB8fDB8fHww&w=1000&q=80";
  } 
  else if (selectedPlanet == "Neptune") {
    var img = document.getElementById("imageneptune");
    img.style.display = "block";
    img.src = "neptunex.gif"; // Local file
  }
});

// Back button on the preview screen
document.getElementById("buttonback").addEventListener("click", function() {
  goToScreen("screenhome");
});

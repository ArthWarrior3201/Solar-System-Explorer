onEvent("buttonlogin", "click", function( ) {
  setScreen("screenhome");
});
onEvent("dropdown1", "click", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Sun") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imageSunpreview");
      setScreen("screenpreview");
      setProperty("imageSunpreview", "image", "assets/sun-blasts-a-m66-flare.jpg");
    });
    onEvent("buttonback", "click", function( ) {
      setScreen("screenhome");
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Mercury") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imagemercury");
      setScreen("screenpreview");
      setProperty("imagemercury", "image", "https://cseligman.com/text/planets/mercury081006.jpg");
    });
    onEvent("buttonback", "click", function( ) {
      setScreen("screenhome");
    });
  }
});
onEvent("image13", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Venus") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imagevenus");
      setScreen("screenpreview");
      setProperty("imagevenus", "image", "https://i.gifer.com/UK7n.gif");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Earth") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imagearth");
      setScreen("screenpreview");
      setProperty("imagearth", "image", "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/5039be67fed83855f6626ecd34b1c753.jpg");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Moon") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imagemoon");
      setScreen("screenpreview");
      setProperty("imagemoon", "image", "https://img.freepik.com/premium-photo/beautiful-moon-close-up_94937-201.jpg?size=626&ext=jpg");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Mars") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imageMars");
      setScreen("screenpreview");
      setProperty("imageMars", "image", "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyc3xlbnwwfHwwfHx8MA==&w=1000&q=80");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Jupiter") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imageJupiter");
      setScreen("screenpreview");
      setProperty("imageJupiter", "image", "https://upload.wikimedia.org/wikipedia/commons/8/84/Hubble_Visible_View_of_Jupiter.jpg");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Saturn") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imageSaturn");
      setScreen("screenpreview");
      setProperty("imageSaturn", "image", "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0dXJufGVufDB8fDB8fHww&w=1000&q=80");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Uranus") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imageuranus");
      setScreen("screenpreview");
      setProperty("imageuranus", "image", "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJhbnVzfGVufDB8fDB8fHww&w=1000&q=80");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("dropdown1", "change", function( ) {
  var option = getProperty("dropdown1", "value");
  console.log("option");
  if (option == "Neptune") {
    showElement("button2");
    onEvent("button2", "click", function( ) {
      showElement("imageneptune");
      setScreen("screenpreview");
      setProperty("imageneptune", "image", "assets/neptunex.gif");
      onEvent("buttonback", "click", function( ) {
        setScreen("screenhome");
      });
    });
  }
});
onEvent("button1", "click", function( ) {
  setScreen("screenmadeusing");
  setProperty("imagecodeorglogo", "image", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1280px-Code.org_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail");
});
onEvent("button4", "click", function( ) {
  setScreen("screenfact");
});
onEvent("buttonback2", "click", function( ) {
  setScreen("screenhome");
});
onEvent("buttonback3", "click", function( ) {
  setScreen("screenhome");
});
onEvent("buttonback4", "click", function( ) {
  setScreen("screenhome");
});
onEvent("button3", "click", function( ) {
  setScreen("screenfact2");
});
onEvent("buttonlogin", "click", function( ) {
  setScreen("screenwelcome");
});
onEvent("button5", "click", function( ) {
  setScreen("screenregister");
});
onEvent("button6", "click", function( ) {
  setScreen("screenlogin");
});
onEvent("button7", "click", function( ) {
  setScreen("screenhome");
});

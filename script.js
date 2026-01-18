fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("distance").innerText = data.distance;
    document.getElementById("motion").innerText = data.motion ? "JA" : "NEIN";
  });

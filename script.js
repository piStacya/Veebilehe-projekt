const tips = [
    "Anna oma koerale piisavalt vett ja sööki iga päev.",
    "Harja oma kassi karv vähemalt kord nädalas.",
    "Paku oma jänesele alati värsket vett ja porgandeid.",
    "Loomad vajavad liikumist, mängi nendega regulaarselt.",
    "Külastage loomaarsti vähemalt kord aastas.",
    "Veendu, et su koduloomal oleks mugav ja soe magamiskoht.",
    "Kasutage mänguasju, et stimuleerida oma lemmiklooma aju ja aktiivsust."
  ];
  
  const tipButton = document.getElementById("generate-tip");
  const dailyTip = document.getElementById("daily-tip");
  
  tipButton.addEventListener("click", function() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    dailyTip.textContent = `Päeva näpunäide: ${randomTip}`;
  });
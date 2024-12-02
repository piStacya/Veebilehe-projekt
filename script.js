document.getElementById("generate-tip").addEventListener("click", function () {
    const tips = [
      "Anna oma lemmikloomale regulaarselt vett!",
      "Ära unusta lemmiklooma küüsi lõigata.",
      "Käi lemmikloomaga regulaarselt kontrollis.",
      "Paku oma lemmikloomale mänguasju ja treeningut.",
      "Tagage lemmikloomale rahulik magamiskoht."
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("daily-tip").innerText = randomTip;
  });
  //Koodi saime chatGPT abil

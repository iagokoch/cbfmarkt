
function chooseCompetition(competition) {
    alert("Você escolheu a " + competition);
    switch (competition) {
      case 'Serie A':
        window.location.href = 'seriea.html';
        break;
      case 'Serie B':
        window.location.href = 'serieb.html';
        break;
      case 'Serie C':
        window.location.href = 'seriec.html';
        break;
      case 'Serie D':
        window.location.href = 'seried.html';
        break;
    }
  }
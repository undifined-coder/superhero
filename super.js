window.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var searchBtn = document.getElementById('searchBtn');
    var resultsDiv = document.getElementById('results');
  
    searchBtn.addEventListener('click', function() {
      var heroName = searchInput.value.trim();
      if (heroName !== '') {
        searchSuperhero(heroName);
      } else {
        resultsDiv.innerHTML = '';
        displayMessage('Please enter a superhero name.', 'text-danger');
      }
    });
  
    function searchSuperhero(name) {
      resultsDiv.innerHTML = '';
      displayMessage('Searching for ' + name + '...', 'text-info');
  
      // Simulating an asynchronous API call
      setTimeout(function() {
        var heroes = getMockHeroesData(); // Replace with your own API call
  
        var matchingHeroes = heroes.filter(function(hero) {
          return hero.name.toLowerCase().includes(name.toLowerCase());
        });
  
        if (matchingHeroes.length > 0) {
          matchingHeroes.forEach(function(hero) {
            var heroCard = createHeroCard(hero);
            resultsDiv.appendChild(heroCard);
          });
        } else {
          displayMessage('No superheroes found.', 'text-danger');
        }
      }, 2000); // Simulating a delay of 2 seconds
    }
  
    function createHeroCard(hero) {
      var heroCard = document.createElement('div');
      heroCard.classList.add('hero-card');
  
      var heroImage = document.createElement('img');
      heroImage.src = hero.image;
      heroImage.classList.add('hero-image');
      heroCard.appendChild(heroImage);
  
      var heroName = document.createElement('h3');
      heroName.textContent = hero.name;
      heroCard.appendChild(heroName);
  
      var heroPower = document.createElement('p');
      heroPower.textContent = 'Power: ' + hero.power;
      heroCard.appendChild(heroPower);
  
      var heroDescription = document.createElement('p');
      heroDescription.textContent = hero.description;
      heroCard.appendChild(heroDescription);
  
      return heroCard;
    }
  
    function displayMessage(message, className) {
      var messageElement = document.createElement('p');
      messageElement.textContent = message;
      messageElement.classList.add(className);
      resultsDiv.appendChild(messageElement);
    }
})

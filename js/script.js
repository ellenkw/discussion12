let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById('host-name').textContent = 'Ellen Lee';
document.getElementById('collaborator-name').textContent = 'Haoyu Zhao';
document.getElementById('collaborator-2-name').textContent = 'None';



// Question 2
// You can also create their own CSS classes in style.css file and use that. 



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.getElementById('first_name').addEventListener('input', function (event) {
    const firstName = event.target.value;
    if (firstName.toLowerCase() === 'john') {
        document.getElementById('last_name').value = 'Doe';
    }
});


// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.
document.getElementById('user_name').addEventListener('input', function() {
    const username = this.value;
    const alertText = pokemonList.includes(username) ? "Username already exists" : "Unique username created";
    document.getElementById('username-alert').textContent = alertText;
});


// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.




//Question 6





//Question 7 





//Question 8
function changeBackground(event) {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor; }

const colorInput = document.getElementById("color-picker");
colorInput.addEventListener("input", changeBackground);




//Question 9 


const requestURL = 'js/spawn_mobs.json';

//brewing section
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const good = jsonObject['good'];
    for (let i = 0; i < good.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let locate = document.createElement('p');
        let creation = document.createElement('p');
        let diff = document.createElement('p');
        let photo = document.createElement('img');

        photo.setAttribute('src', jsonObject.good[i].photo);
        photo.setAttribute('alt', jsonObject.good[i].mob);
        card.appendChild(photo);
        
        h2.textContent = jsonObject.good[i].mob;
        card.appendChild(h2);

        locate.textContent = "Location: " + jsonObject.good[i].location;
        card.appendChild(locate);
        creation.textContent = "Drops Items: " + jsonObject.good[i].items;
        card.appendChild(creation);
        diff.textContent = "Difficulty: " + jsonObject.good[i].difficult;
        card.appendChild(diff);

        document.querySelector('div.cards').appendChild(card);
    }
  });
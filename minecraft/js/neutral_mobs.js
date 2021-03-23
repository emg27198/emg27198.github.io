const requestURL = 'js/spawn_mobs.json';

//brewing section
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const neutral = jsonObject['neutral'];
    for (let i = 0; i < neutral.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let locate = document.createElement('p');
        let creation = document.createElement('p');
        let diff = document.createElement('p');
        let photo = document.createElement('img');

        photo.setAttribute('src', jsonObject.neutral[i].photo);
        photo.setAttribute('alt', jsonObject.neutral[i].mob);
        card.appendChild(photo);
        
        h2.textContent = jsonObject.neutral[i].mob;
        card.appendChild(h2);

        locate.textContent = "Location: " + jsonObject.neutral[i].location;
        card.appendChild(locate);
        creation.textContent = "Drops Items: " + jsonObject.neutral[i].items;
        card.appendChild(creation);
        diff.textContent = "Difficulty: " + jsonObject.neutral[i].difficult;
        card.appendChild(diff);

        document.querySelector('div.cards').appendChild(card);
    }
  });
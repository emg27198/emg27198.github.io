const requestURL = 'js/materials.json';

//brewing section
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const renew = jsonObject['renew'];
    for (let i = 0; i < renew.length; i++ ) {
        let card = document.createElement('section');
        let image = document.createElement('section');
        let h2 = document.createElement('h2');
        let line = document.createElement('h3');
        let diff = document.createElement('h4');
        let photo = document.createElement('img');
        let para = document.createElement('p');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');

        h2.textContent = jsonObject.renew[i].brew[0].item;
        card.appendChild(h2);

        line.textContent = jsonObject.renew[i].brew[0].drop;
        card.appendChild(line);
        diff.textContent = jsonObject.renew[i].brew[0].difficult;
        card.appendChild(diff);

        para.textContent = jsonObject.renew[i].brew[0].applicate[0];
        card.appendChild(para);
        para1.textContent = jsonObject.renew[i].brew[0].applicate[1];
        card.appendChild(para1);
        para2.textContent = jsonObject.renew[i].brew[0].applicate[2];
        card.appendChild(para2);
        

        photo.setAttribute('src', jsonObject.renew[i].brew[0].photo);
        photo.setAttribute('alt', jsonObject.renew[i].brew[0].item);
        image.appendChild(photo);

        document.querySelector('div.cards').appendChild(card);
        document.querySelector('div.image').appendChild(image);
    }
  });
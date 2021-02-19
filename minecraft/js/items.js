const requestURL = 'js/materials.json';


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
        let line = document.createElement('h4');
        let photo = document.createElement('img');
        let para = document.createElement('p');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');

        h2.textContent = jsonObject.renew[i].item;
        card.appendChild(h2);

        line.textContent = jsonObject.renew[i].drop;
        card.appendChild(line);

        para.textContent = jsonObject.renew[i].applicate[0];
        card.appendChild(para);
        para1.textContent = jsonObject.renew[i].applicate[1];
        card.appendChild(para1);
        para2.textContent = jsonObject.renew[i].applicate[2];
        card.appendChild(para2);

        photo.setAttribute('src', jsonObject.renew[i].photo);
        photo.setAttribute('alt', jsonObject.renew[i].item);
        image.appendChild(photo);

        document.querySelector('div.cards').appendChild(card);
        document.querySelector('div.image').appendChild(image);
    }
  });

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const nonrenew = jsonObject['nonrenew'];
    for (let i = 0; i < nonrenew.length; i++ ) {
        let card = document.createElement('section');
        let image = document.createElement('section');
        let h2 = document.createElement('h2');
        let line = document.createElement('h4');
        let photo = document.createElement('img');
        let para = document.createElement('p');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');

        h2.textContent = jsonObject.nonrenew[i].item;
        card.appendChild(h2);

        line.textContent = jsonObject.nonrenew[i].drop;
        card.appendChild(line);

        para.textContent = jsonObject.nonrenew[i].applicate[0];
        card.appendChild(para);
        para1.textContent = jsonObject.nonrenew[i].applicate[1];
        card.appendChild(para1);
        para2.textContent = jsonObject.nonrenew[i].applicate[2];
        card.appendChild(para2);

        photo.setAttribute('src', jsonObject.nonrenew[i].photo);
        photo.setAttribute('alt', jsonObject.nonrenew[i].item);
        image.appendChild(photo);

        document.querySelector('div.information').appendChild(card);
        document.querySelector('div.images').appendChild(image);
    }
  });
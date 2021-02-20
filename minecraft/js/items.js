const requestURL = 'js/materials.json';

//brewing section
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const brew = jsonObject['brew'];
    for (let i = 0; i < brew.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let locate = document.createElement('p');
        let use = document.createElement('h3');
        let diff = document.createElement('p');
        let para = document.createElement('p');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        let photo = document.createElement('img');

        photo.setAttribute('src', jsonObject.brew[i].photo);
        photo.setAttribute('alt', jsonObject.brew[i].item);
        card.appendChild(photo);
        
        h2.textContent = jsonObject.brew[i].item;
        card.appendChild(h2);

        locate.textContent = "Location: " + jsonObject.brew[i].location;
        card.appendChild(locate);
        diff.textContent = "Difficulty: " + jsonObject.brew[i].difficult;
        card.appendChild(diff);


        use.textContent = "Uses:";
        card.appendChild(use);
        para.textContent = jsonObject.brew[i].applicate[0];
        card.appendChild(para);
        para1.textContent = jsonObject.brew[i].applicate[1];
        card.appendChild(para1);
        para2.textContent = jsonObject.brew[i].applicate[2];
        card.appendChild(para2);

        document.querySelector('div.cards').appendChild(card);
    }
  });
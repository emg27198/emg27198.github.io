const requestURL = 'js/non-renew.json';

//dirt section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
  const dirt= jsonObject['dirt'];
  for (let i = 0; i < dirt.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let aquire = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.dirt[i].photo);
      photo.setAttribute('alt', jsonObject.dirt[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.dirt[i].item;
      card.appendChild(h2);

      aquire.textContent = "How to Get Item: " + jsonObject.dirt[i].aquire;
      card.appendChild(aquire);

      document.querySelector('div.carding').appendChild(card);
  }
});

//end section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
    const end= jsonObject['end'];
    for (let i = 0; i < end.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let aquire = document.createElement('p');
        let photo = document.createElement('img');
  
        photo.setAttribute('src', jsonObject.end[i].photo);
        photo.setAttribute('alt', jsonObject.end[i].item);
        card.appendChild(photo);
        
        h2.textContent = jsonObject.end[i].item;
        card.appendChild(h2);
  
        aquire.textContent = "How to Get Item: " + jsonObject.end[i].aquire;
        card.appendChild(aquire);
  
        document.querySelector('div.carding1').appendChild(card);
    }
});


//misc section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
    const misc= jsonObject['misc'];
    for (let i = 0; i < misc.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let aquire = document.createElement('p');
        let photo = document.createElement('img');
  
        photo.setAttribute('src', jsonObject.misc[i].photo);
        photo.setAttribute('alt', jsonObject.misc[i].item);
        card.appendChild(photo);
        
        h2.textContent = jsonObject.misc[i].item;
        card.appendChild(h2);
  
        aquire.textContent = "How to Get Item: " + jsonObject.misc[i].aquire;
        card.appendChild(aquire);
  
        document.querySelector('div.carding2').appendChild(card);
    }
});

//nether section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
    const nether= jsonObject['nether'];
    for (let i = 0; i < nether.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let aquire = document.createElement('p');
        let photo = document.createElement('img');
  
        photo.setAttribute('src', jsonObject.nether[i].photo);
        photo.setAttribute('alt', jsonObject.nether[i].item);
        card.appendChild(photo);
        
        h2.textContent = jsonObject.nether[i].item;
        card.appendChild(h2);
  
        aquire.textContent = "How to Get Item: " + jsonObject.nether[i].aquire;
        card.appendChild(aquire);
  
        document.querySelector('div.carding3').appendChild(card);
    }
});

//ore section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
    const ore= jsonObject['ore'];
    for (let i = 0; i < ore.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let aquire = document.createElement('p');
        let photo = document.createElement('img');
        let photo2 = document.createElement('img');

        photo.setAttribute('src', jsonObject.ore[i].photo[0]);
        photo.setAttribute('alt', jsonObject.ore[i].item[0]);
        card.appendChild(photo);
        photo2.setAttribute('src', jsonObject.ore[i].photo[1]);
        photo2.setAttribute('alt', jsonObject.ore[i].item[1]);
        card.appendChild(photo2);
        
        h2.textContent = jsonObject.ore[i].item;
        card.appendChild(h2);
  
        aquire.textContent = "How to Get Item: " + jsonObject.ore[i].aquire;
        card.appendChild(aquire);
  
        document.querySelector('div.carding4').appendChild(card);
    }
});

//stone section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
    const stone= jsonObject['stone'];
    for (let i = 0; i < stone.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let aquire = document.createElement('p');
        let photo = document.createElement('img');
        
  
        photo.setAttribute('src', jsonObject.stone[i].photo);
        photo.setAttribute('alt', jsonObject.stone[i].item);
        card.appendChild(photo);
        
        h2.textContent = jsonObject.stone[i].item;
        card.appendChild(h2);
  
        aquire.textContent = "How to Get Item: " + jsonObject.stone[i].aquire;
        card.appendChild(aquire);
  
        document.querySelector('div.carding5').appendChild(card);
    }
});
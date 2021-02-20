const requestURL = 'js/renew-material.json';

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
        let mobs = document.createElement('p');
        let locate = document.createElement('p');
        let creation = document.createElement('p');
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
        mobs.textContent = "Mob Spawn: " + jsonObject.brew[i].mob;
        card.appendChild(mobs);
        creation.textContent = "Items to Craft Item: " + jsonObject.brew[i].craft;
        card.appendChild(creation);
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

//dirt section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const dirt= jsonObject['dirt'];
  for (let i = 0; i < dirt.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let mobs = document.createElement('p');
      let locate = document.createElement('p');
      let creation = document.createElement('p');
      let use = document.createElement('h3');
      let diff = document.createElement('p');
      let para = document.createElement('p');
      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.dirt[i].photo);
      photo.setAttribute('alt', jsonObject.dirt[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.dirt[i].item;
      card.appendChild(h2);

      locate.textContent = "Location: " + jsonObject.dirt[i].location;
      card.appendChild(locate);
      mobs.textContent = "Mob Spawn: " + jsonObject.dirt[i].mob;
      card.appendChild(mobs);
      creation.textContent = "Items to Craft Item: " + jsonObject.dirt[i].craft;
      card.appendChild(creation);
      diff.textContent = "Difficulty: " + jsonObject.dirt[i].difficult;
      card.appendChild(diff);


      use.textContent = "Uses:";
      card.appendChild(use);
      para.textContent = jsonObject.dirt[i].applicate[0];
      card.appendChild(para);
      para1.textContent = jsonObject.dirt[i].applicate[1];
      card.appendChild(para1);
      para2.textContent = jsonObject.dirt[i].applicate[2];
      card.appendChild(para2);

      document.querySelector('div.cards1').appendChild(card);
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
      let mobs = document.createElement('p');
      let locate = document.createElement('p');
      let creation = document.createElement('p');
      let use = document.createElement('h3');
      let diff = document.createElement('p');
      let para = document.createElement('p');
      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.end[i].photo);
      photo.setAttribute('alt', jsonObject.end[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.end[i].item;
      card.appendChild(h2);

      locate.textContent = "Location: " + jsonObject.end[i].location;
      card.appendChild(locate);
      mobs.textContent = "Mob Spawn: " + jsonObject.end[i].mob;
      card.appendChild(mobs);
      creation.textContent = "Items to Craft Item: " + jsonObject.end[i].craft;
      card.appendChild(creation);
      diff.textContent = "Difficulty: " + jsonObject.end[i].difficult;
      card.appendChild(diff);


      use.textContent = "Uses:";
      card.appendChild(use);
      para.textContent = jsonObject.end[i].applicate[0];
      card.appendChild(para);
      para1.textContent = jsonObject.end[i].applicate[1];
      card.appendChild(para1);
      para2.textContent = jsonObject.end[i].applicate[2];
      card.appendChild(para2);

      document.querySelector('div.cards2').appendChild(card);
  }
});

//food section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const food= jsonObject['food'];
  for (let i = 0; i < food.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let mobs = document.createElement('p');
      let locate = document.createElement('p');
      let creation = document.createElement('p');
      let use = document.createElement('h3');
      let diff = document.createElement('p');
      let para = document.createElement('p');
      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.food[i].photo);
      photo.setAttribute('alt', jsonObject.food[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.food[i].item;
      card.appendChild(h2);

      locate.textContent = "Location: " + jsonObject.food[i].location;
      card.appendChild(locate);
      mobs.textContent = "Mob Spawn: " + jsonObject.food[i].mob;
      card.appendChild(mobs);
      creation.textContent = "Items to Craft Item: " + jsonObject.food[i].craft;
      card.appendChild(creation);
      diff.textContent = "Difficulty: " + jsonObject.food[i].difficult;
      card.appendChild(diff);


      use.textContent = "Uses:";
      card.appendChild(use);
      para.textContent = jsonObject.food[i].applicate[0];
      card.appendChild(para);
      para1.textContent = jsonObject.food[i].applicate[1];
      card.appendChild(para1);
      para2.textContent = jsonObject.food[i].applicate[2];
      card.appendChild(para2);

      document.querySelector('div.cards3').appendChild(card);
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
      let mobs = document.createElement('p');
      let locate = document.createElement('p');
      let creation = document.createElement('p');
      let use = document.createElement('h3');
      let diff = document.createElement('p');
      let para = document.createElement('p');
      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.misc[i].photo);
      photo.setAttribute('alt', jsonObject.misc[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.misc[i].item;
      card.appendChild(h2);

      locate.textContent = "Location: " + jsonObject.misc[i].location;
      card.appendChild(locate);
      mobs.textContent = "Mob Spawn: " + jsonObject.misc[i].mob;
      card.appendChild(mobs);
      creation.textContent = "Items to Craft Item: " + jsonObject.misc[i].craft;
      card.appendChild(creation);
      diff.textContent = "Difficulty: " + jsonObject.misc[i].difficult;
      card.appendChild(diff);


      use.textContent = "Uses:";
      card.appendChild(use);
      para.textContent = jsonObject.misc[i].applicate[0];
      card.appendChild(para);
      para1.textContent = jsonObject.misc[i].applicate[1];
      card.appendChild(para1);
      para2.textContent = jsonObject.misc[i].applicate[2];
      card.appendChild(para2);

      document.querySelector('div.cards4').appendChild(card);
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
      let mobs = document.createElement('p');
      let locate = document.createElement('p');
      let creation = document.createElement('p');
      let use = document.createElement('h3');
      let diff = document.createElement('p');
      let para = document.createElement('p');
      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.nether[i].photo);
      photo.setAttribute('alt', jsonObject.nether[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.nether[i].item;
      card.appendChild(h2);

      locate.textContent = "Location: " + jsonObject.nether[i].location;
      card.appendChild(locate);
      mobs.textContent = "Mob Spawn: " + jsonObject.nether[i].mob;
      card.appendChild(mobs);
      creation.textContent = "Items to Craft Item: " + jsonObject.nether[i].craft;
      card.appendChild(creation);
      diff.textContent = "Difficulty: " + jsonObject.nether[i].difficult;
      card.appendChild(diff);


      use.textContent = "Uses:";
      card.appendChild(use);
      para.textContent = jsonObject.nether[i].applicate[0];
      card.appendChild(para);
      para1.textContent = jsonObject.nether[i].applicate[1];
      card.appendChild(para1);
      para2.textContent = jsonObject.nether[i].applicate[2];
      card.appendChild(para2);

      document.querySelector('div.cards5').appendChild(card);
  }
});

//plant section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const plants= jsonObject['plants'];
  for (let i = 0; i < plants.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let locate = document.createElement('p');
      let use = document.createElement('h3');
      let para = document.createElement('p');
      let para1 = document.createElement('p');
      let para2 = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.plants[i].photo);
      photo.setAttribute('alt', jsonObject.plants[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.plants[i].item;
      card.appendChild(h2);

      locate.textContent = "Location: " + jsonObject.plants[i].location;
      card.appendChild(locate);


      use.textContent = "Uses:";
      card.appendChild(use);
      para.textContent = jsonObject.plants[i].applicate[0];
      card.appendChild(para);
      para1.textContent = jsonObject.plants[i].applicate[1];
      card.appendChild(para1);
      para2.textContent = jsonObject.plants[i].applicate[2];
      card.appendChild(para2);

      document.querySelector('div.cards6').appendChild(card);
  }
});  

//tools section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const tools= jsonObject['tools'];
  for (let i = 0; i < tools.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let armor = document.createElement('p');
      let tools = document.createElement('p');
      let creation = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.tools[i].photo);
      photo.setAttribute('alt', jsonObject.tools[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.tools[i].item;
      card.appendChild(h2);

      armor.textContent = "Armor Pieces: " + jsonObject.tools[i].armor;
      card.appendChild(armor);
      tools.textContent = "Tools Available: " + jsonObject.tools[i].tools;
      card.appendChild(tools);
      creation.textContent = "Craftable?: " + jsonObject.tools[i].craft;
      card.appendChild(creation);

      document.querySelector('div.cards7').appendChild(card);
  }
});

//wood section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const wood= jsonObject['wood'];
  for (let i = 0; i < wood.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let tree = document.createElement('p');
      let locate = document.createElement('p');
      let photo = document.createElement('img');

      photo.setAttribute('src', jsonObject.wood[i].photo);
      photo.setAttribute('alt', jsonObject.wood[i].item);
      card.appendChild(photo);
      
      h2.textContent = jsonObject.wood[i].item;
      card.appendChild(h2);
      tree.textContent = "Tree Type: " + jsonObject.wood[i].tree;
      card.appendChild(tree);
      locate.textContent = "Location: " + jsonObject.wood[i].location;
      card.appendChild(locate);

      document.querySelector('div.cards8').appendChild(card);
  }
});
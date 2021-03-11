const requestURL = 'js/videos.json';

//videos section
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
  const videos= jsonObject['videos'];
  for (let i = 0; i < videos.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let creating = document.createElement('h3');
      let sum = document.createElement('p');
      let vid = document.createElement('iframe');

      vid.setAttribute('src', jsonObject.videos[i].embed);
      vid.setAttribute('alt', jsonObject.videos[i].title);
      card.appendChild(vid);
      
      h2.textContent = jsonObject.videos[i].title;
      card.appendChild(h2);

      creating.textContent = "Creator: " + jsonObject.videos[i].creator;
      card.appendChild(creating);
      sum.textContent = jsonObject.videos[i].summary;
      card.appendChild(sum);

      document.querySelector('div.videocard').appendChild(card);
  }
});
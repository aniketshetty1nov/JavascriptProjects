const form = document.getElementById('form');
const search = document.getElementById('search')
const result = document.getElementById('result')
const more = document.getElementById('more')

const apiURL = 'https://api.lyrics.ovh';

//Search By song or artist
async function searchSongs(term) {
      // fetch(`${apiURL}/suggest/${term}`)
      // .then(res => res.json())
      // .then(data => console.log(data));

      const res = await fetch(`${apiURL}/suggest/${term}`)
      const data = await res.json();


      showData(data);

}



//show song and artist in DOM 
function showData(data) {
      //  console.log(data.data)

      let output = '';
      // Looping Thru data.data objects using ForEach
      // data.data.forEach(song => {
      //       output +=  `
      //       <li>
      //             <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      //             <button class="btn" data-artist="${song.artist.name}"
      //              data-songtitle="${song.title}">Get Lyrics</button>
      //       </li>
      //             `;     
      // });

      // result.innerHTML = `
      //       <ul class="songs">
      //             ${output}
      //       </ul> 
      // `;

      // Alternate Step For above commented code using Map Function
      result.innerHTML = `
      <ul class="songs">
            ${data.data.map(song => `
            <li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}"
             data-songtitle="${song.title}">Get Lyrics</button>
      </li>
            `).join('')}
      </ul> 
`;

      if (data.prev || data.next) {
            more.innerHTML = `
             ${data.prev ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>` : ''}
             ${data.next ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>` : ''}
            `
      } else {
            more.innerHTML = '';
      }
}

//get prev and Next results  and To avoid geting the error of cors-policy add `https://cors-anywhere.herokuapp.com/${url}`
async function getMoreSongs(url) {
      const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
      const data = await res.json();
      showData(data);

}

// Get Lyrics for song
async function getLyrics(artist, songTitle) {
      const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
      const data = await res.json();
      // showData(data);
      // 
      lyrics = data.lyrics.replace(/{\r\n|\r|\n}/g,'<br>');

      result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
          <span>${lyrics}</span>`;

          more.innerHTML = '';
      console.log(data)  

}


// Event Listeners
form.addEventListener('submit', e => {
      e.preventDefault();

      const searchTerm = search.value.trim();

      if (!searchTerm) {
            alert('Please type in a search term')
      } else {
            searchSongs(searchTerm);
      }


});


// Get Lyrics Button click

result.addEventListener('click', e => {
      // console.log(e.target);
      const clickedEl = e.target;
      if (clickedEl.tagName === 'BUTTON') {
            //  console.log(123);
            const artist = clickedEl.getAttribute('data-artist');
            const songTitle = clickedEl.getAttribute('data-songtitle');


            getLyrics(artist, songTitle);
      }
})
let screenHeight = screen.height;
const albumsDiv = document.querySelector("#albums");
const albums = document.querySelectorAll(".list-item");

//lista albumów
const albumsData = [
  { id: 13, artist: 'Boston', album: 'Boston', premiere: '30 November, 1982', sold: 17000000, image: "./img/13boston.jpg" },
  { id: 12, artist: 'Whitney Houston', album: 'The Bodyguard', premiere: '17 November, 1992', sold: 18000000, image: "./img/12houston.jpg" },
  { id: 11, artist: 'Guns N\' Roses', album: 'Appetite for destruction', premiere: '17 November, 1992', sold: 18000000, image: "./img/11guns.jpg" },
  { id: 10, artist: 'The Beatles', album: 'The Beatles', premiere: '22 November, 1968', sold: 19000000, image: "./img/10the_beatles.jpg" },
  { id: 9, artist: 'Shania Twain', album: 'Come on Over', premiere: '4 November, 1997', sold: 2000000, image: "./img/9shania.jpg" },
  { id: 8, artist: 'Fleetwood Mac', album: 'Rumours', premiere: '4 November, 1977', sold: 2000000, image: "./img/8fleetwood.jpg" },
  { id: 7, artist: 'Garth Brooks', album: 'Double live', premiere: '17 November, 1998', sold: 2100000, image: "./img/7garth_brooks.jpg" },
  { id: 6, artist: 'AC/DC', album: 'Back in Black', premiere: '25 July, 1980', sold: 2200000, image: "./img/6acdc.jpg" },
  { id: 5, artist: 'Pink Floyd', album: 'The Wall', premiere: '30 November, 1980', sold: 2300000, image: "./img/5pink_floyd.jpg" },
  { id: 4, artist: 'Led Zeppelin', album: 'Led Zeppelin IV', premiere: '8 November, 1971', sold: 2300000, image: "./img/4led_zeppelin.jpg" },
  { id: 3, artist: 'Billy Joel', album: 'Greatest Hits Volume 1 & Volume 2', premiere: '2 September, 1985', sold: 2300000, image: "./img/3billy_joel.jpg" },
  { id: 2, artist: 'Eagles', album: 'Their Greatest Hits (1971-1975)', premiere: '17 February, 1976', sold: 2900000, image: "./img/2eagles.jpg" },
  { id: 1, artist: 'Michael Jackson', album: 'Thriller', premiere: '30 November, 1982', sold: 3200000, image: "./img/1jackson.jpg" },
]

const numberConverter = (num) => `${num.toString().slice(0, 2)} mln sprzedanych kopii`

//generowanie linków do nawigacji
const generateNavLink = (data) => `<a href="#place${data.id}" class="place${data.id}">#${data.id}</a>`;

const nav = document.querySelector("#nav");
let navHTML = '<a href="#opening" class="placeStart">HOME</a>';
albumsData.forEach(albumsData => navHTML = navHTML + generateNavLink(albumsData));
nav.innerHTML += navHTML;


//generowanie albumu a la React
function generateSection(data) {
  let { id, artist, album, premiere, sold, image } = data;
  const soldText = numberConverter(sold)
  const bgImg = `url('${image}')`
  console.log()

  var html = `  
  <section id="place${id}" class="list-item" data-anchor="Page ${id}">
  <div class="center-me">
    <div class="image-box">
      <img style="background: ${bgImg} 50% 50% no-repeat; background-size: cover; width: 600px; height: 100%"/>
    </div>
    <div class="about-box">
      <h1>#${id}</h1>
      <div class="band">
        <h2 class="album">${album}</h2>
        <h3 class="artist">${artist}</h3>
      </div>
        <h4>Premiera: ${premiere}</h4>
        <h4>${soldText}</h3>
      </div>
    </div>
  </section>`;

  return html;
}


let body = document.getElementsByTagName('BODY')[0];
let backgroundColors = ['#333333', '#fff', '#5366c6', '#919191', '#705629', '#d7d4c1', '#666666', 'rgba(0,0,0,0.47)', '#ffffff', '#cdbea7', '#46393e', '#6b94c2', '#f8f7fc'];


let albumsHTML = '';
albumsData.forEach((albumsData, index) => {
  albumsHTML = albumsHTML + generateSection(albumsData);

  window.addEventListener('scroll', () => { //zmiana tła na scroll'u  
    let scrollPos = window.pageYOffset;

    if (scrollPos >= screenHeight + screenHeight * (index)-200) {
      body.style.background = backgroundColors[index];
    }
  })
}
)
albumsDiv.innerHTML += albumsHTML;

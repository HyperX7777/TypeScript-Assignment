interface albumInfo {
    artist_name: string;
    album_title: string;
    tracks?: number;
};


  const make_album = (artist_name: string, album_title: string, tracks?: number) => {
    let albumToObject: albumInfo = {
     artist_name,
     album_title,
     ...(tracks != null && {
            tracks
     }),
    };
    return albumToObject;
  };

console.log(make_album("Talha Anjum", "Open Letter"));
console.log(make_album("Taimour Baig", "Dear God"));
console.log(make_album("Talha Anjum", "Worth The Wait", 2));
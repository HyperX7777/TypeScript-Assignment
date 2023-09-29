"use strict";
;
const make_album = (artist_name, album_title, tracks) => {
    let albumToObject = {
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

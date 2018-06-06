import React from 'react';
import ListAlbums from './ListAlbums'

const AllAlbums = ({albums, chooseAlbum}) => {
  return (
    <div className="container">
      <div id="albums" className="row wrap">
      {
        albums.map(album =>
          <ListAlbums
            key={album.id}
            album={album}
            chooseAlbum={chooseAlbum} />
        )
      }
      </div>
    </div>
  );
};

export default AllAlbums


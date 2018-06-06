import React from 'react';

const ListAlbums = ({ album, chooseAlbum }) => {
  return (
    <div className="album">
      <a onClick={() => chooseAlbum(album.id)}>
        <img src={album.artworkUrl} />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
  );
};

export default ListAlbums;

import React from 'react';

const ListSongs = ({ album, song }) => {
  const artist = album.artist

  return (
    <tr>
      <td>
        <i className="fa fa-play-circle" />
      </td>

      <td>{song.id}</td>
      <td>{song.name}</td>
      <td>{artist.name}</td>
      <td>{song.genre}</td>
    </tr>
  );
};

export default ListSongs;

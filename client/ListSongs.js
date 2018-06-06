import React from 'react';

const ListSongs = ({ album, song, start, pause, currentSongId, songIsPlaying }) => {
  const songs = album.songs
  const artist = album.artist
  const isPlaying = song.id === currentSongId && songIsPlaying
  return (
    <tr>
      <td>
        <i
          className={isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
          onClick={isPlaying ? pause : () => start(song, songs)}
        />
      </td>

      <td>{song.id}</td>
      <td>{song.name}</td>
      <td>{artist.name}</td>
      <td>{song.genre}</td>
    </tr>
  );
};

export default ListSongs;

import React from 'react';
import ListSongs from './ListSongs'

const SingleAlbum = ({album, start, pause, currentSongId, songIsPlaying}) => {
  console.log(album)
  return (
  <div className='container'>
    <div id='single-album' className='column'>
    <div className='album'>
      <a>
        <img src='default-album.jpg' />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
    <table id='songs'>
      <tbody>
        <tr className='gray'>
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        {
        album.songs.map(song =>
          <ListSongs
            key={song.id}
            album={album}
            song={song}
            start={start}
            pause={pause}
            currentSongId={currentSongId}
            songIsPlaying={songIsPlaying}
          />
        )
        }
      </tbody>
    </table>
  </div>
  </div>
  );
};

export default SingleAlbum

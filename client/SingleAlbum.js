import React from 'react';
import ListSongs from './ListSongs'

const SingleAlbum = ({album}) => {

  return (
  <div className='container'>
    <div id='single-album' className='column'>
    <div className='album'>
      <a>
        <img src='default-album.jpg' />
        <p>ALBUM 2</p>
        <small>Artist Name</small>
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
            song={song} />
        )
        }
      </tbody>
    </table>
  </div>
  </div>
  );
};

export default SingleAlbum

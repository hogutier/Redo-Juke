import React from 'react'
import AllAlbums from './AllAlbums'
import Player from './Player'
import Sidebar from './Sidebar'
import SingleAlbum from './SingleAlbum'
import axios from 'axios'

const audio = document.createElement('audio')

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSongId: 0,
      songIsPlaying: false,
      songList: []
    }
    this.chooseAlbum = this.chooseAlbum.bind(this)
    this.goHome = this.goHome.bind(this)
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
  }

  async componentDidMount(){
    try {
      const {data} = await axios.get('/api/albums')
      this.setState({
        albums: data
      })
    } catch (error) {
      console.log('There was an error fetching all albums')
    }
  }

  async chooseAlbum(albumId){
    try {
      const {data} = await axios.get(`/api/albums/${albumId}`)
      this.setState({
        selectedAlbum: data[0]
      })
    } catch (error) {
      console.log('There was an error fetching single album')
    }

  }

  goHome(){
    this.setState({
      selectedAlbum: {}
    })
  }

  start(song, songs){
    audio.src = song.audioUrl
    audio.load()
    audio.play()
    this.setState({
      currentSongId: song.id,
      songIsPlaying: true,
      songList: songs
    })
  }

  pause() {
    audio.pause()
    this.setState({
      songIsPlaying: false
    })
  }

  resume() {
    audio.play()
    this.setState({
      songIsPlaying: true
    })
  }

  forward() {
    // find out where we are in the current song list
    const {songList, currentSongId} = this.state
    const currentSongIndex = songList.map(song => song.id).indexOf(currentSongId)
    // determine what the next index should be
    const nextSongIndex = currentSongIndex + 1
    // if we're out of songs, stop playing
    // if we still have songs, start the next song
    if (nextSongIndex >= songList.length){
      audio.pause()
      audio.src = ''
      this.setState({
        songIsPlaying: false,
        currentSongId: 0,
        songList: []
      })
    } else {
      audio.pause()
      this.start(songList[nextSongIndex], songList)
    }

  }

  backward() {
    // find out where we are in the current song list
    const {songList, currentSongId} = this.state
    const currentSongIndex = songList.map(song => song.id).indexOf(currentSongId)
    // determine what the next index should be
    const nextSongIndex = currentSongIndex - 1
    //if we are on the first song, start plaing again from beginning
    //if there's still songs to move back, play it
    if (currentSongIndex === 0){
      audio.pause()
      this.start(songList[currentSongIndex], songList)
    } else {
      audio.pause()
      this.start(songList[nextSongIndex], songList)
    }
  }

  render () {
    const selectedAlbum = this.state.selectedAlbum
    return (
      <div id="main" className="row container">
        <Sidebar goHome={this.goHome} />
        { selectedAlbum.id
           ? <SingleAlbum
              album={this.state.selectedAlbum}
              start={this.start}
              pause={this.pause}
              currentSongId={this.state.currentSongId}
              songIsPlaying={this.state.songIsPlaying}
              />
           : <AllAlbums
               albums={this.state.albums}
               chooseAlbum={this.chooseAlbum} />
        }
        <Player
          songIsPlaying={this.state.songIsPlaying}
          resume={this.resume}
          pause={this.pause}
          forward={this.forward}
          backward={this.backward}
        />
      </div>
    )
  }
}

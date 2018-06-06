import React from 'react'
import AllAlbums from './AllAlbums'
import Player from './Player'
import Sidebar from './Sidebar'
import SingleAlbum from './SingleAlbum'
import axios from 'axios'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.chooseAlbum = this.chooseAlbum.bind(this)
    this.goHome = this.goHome.bind(this)
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

  render () {
    const selectedAlbum = this.state.selectedAlbum
    return (
      <div id="main" className="row container">
        <Sidebar goHome={this.goHome} />
        { selectedAlbum.id
           ? <SingleAlbum
              album={this.state.selectedAlbum} />
           : <AllAlbums
               albums={this.state.albums}
               chooseAlbum={this.chooseAlbum} />
        }
        <Player />
      </div>
    )
  }
}

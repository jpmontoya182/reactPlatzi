import React, { Component } from 'react';
import Media from './media.js'
import './playlist.css';

class Playlist extends Component {
    render(){
        const playlistData = this.props.data.categories[0].playlist;
        return (
            <div className="Playlist">
                {
                    playlistData.map((item)=>{
                        console.log(item)
                        return <Media {...item} key={item.id} />
                    }) 
                }
                
            </div>
        )
    }
}

export default Playlist;
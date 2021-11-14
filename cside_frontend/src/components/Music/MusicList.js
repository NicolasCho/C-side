import Music from './Music';
import { Component } from "react";

class Details extends Component {
  render(){
    const { error, loading, musics } = this.props;
    let musicInfo = null;

    musicInfo = musics.map(music => {
        return (
        <div className='music-component'>
            <div className='music-details'>
                <h1 className='music-title'>{props.title}</h1>
                <p className='artist-name'>{props.artist['name']}</p>
            </div>
        </div>
        );
      });


    return (
      <div className="Details">
        <div>DETALHES</div>
      </div>
    );
  }
}
  export default Details;
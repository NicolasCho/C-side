import { Link } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import Bar from "../../components/Bar/Bar"
import "./Details.css";


//Página de detalhes de um tópico. Apresenta as músicas recomendadas e da opção de sugerir uma nova

function Details(props){
  const [musics, setMusics] = useState([]);
  const [topic, setTopic] = useState([]);
 
  
  const loadData = async () =>{
     await axios
      .get(`https://infinite-woodland-71982.herokuapp.com/api/musics/${props.match.params.id}`)
      .then((res) => setMusics(res.data));

      await axios
      .get(`https://infinite-woodland-71982.herokuapp.com/api/topic/${props.match.params.id}`)
      .then((res) => setTopic(res.data));
  }

  useEffect( () => {
    loadData();
  }, []);

  return (
    <div className="Details">
      <Bar />
      
      <Link to="/"><img src="/back_button.png" alt="return" className="back" /></Link>

      <div className='body'>
        {topic.map( topic =>(
          <h1 className='topico' key={`${topic.id}`}>{topic.topic_str}</h1>
        ))}
        <h1>{topic.topic_str}</h1>

        <Link to={{pathname: `search/${props.match.params.id}`}} style={{ textDecoration: 'none' }}>
          <span className="search-box">
            <img src="/search.png" alt="search" className="search-img" />
            <p className='search-txt'>Adicionar músicas</p>
          </span>
        </Link>  

        <div className='music-list'>
              {musics.map(music => (
                          <div className='music-box' key={`MUSIC__${music.music_title}`}>                
                            <img
                                className="music-image"
                                src={music.image_URL}
                                alt="album cover"
                            />
                            <div className='music-info'>
                              <h1 className='music-title'>{music.music_title}</h1>
                              <p className='artist-name'>{music.music_artist}</p>                      
                            </div>
                          </div>                
                      ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
import * as deezerAPI from '../../services/deezerAPI';
import { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "./Search.css";
import Bar from "../../components/Bar/Bar"
import { useHistory } from "react-router-dom";



//https://stackoverflow.com/questions/57373072/state-is-not-defined
//https://github.com/paigen11/movie-demo-3/blob/master/src/containers/MovieSearch/MovieSearch.js

//Página para recomendar uma música em determinado tópico
class Search extends Component {
  
  state = {
    value: '',
    musics: null,
    error: false,
    loading: false,
    prevSearch: null,
    formOption: {title:null, artist:null, albumURL:null}
  };


  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      this.setState({ loading: true, formOption: {title:null, artist:null, albumURL:null}});
      const musics = await deezerAPI.getResults(this.state.value);
      this.setState({
        musics,
        loading: false,
        prevSearch: this.state.value,
        value: '',
      });
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  handleOptionChange = (title, artist, albumURL) => {
    this.setState({
      formOption: {title:title, artist:artist, albumURL:albumURL}
    });
    console.log(this.state.formOption.title);
  };

  createMusic = event => {
    if (this.state.formOption.title == null){
      event.preventDefault();
      console.log('Selecionar!')
    } else {
    event.preventDefault();
    axios
      .post("https://infinite-woodland-71982.herokuapp.com/api/musics/create/", {music_title:this.state.formOption.title, music_artist:this.state.formOption.artist,
                                                        image_URL:this.state.formOption.albumURL, topic_id:this.props.match.params.id})
      .then((response) =>{
          window.location.href= `/details/${this.props.match.params.id}`;
          //console.log('axios post')
      });
    }
  };

  render(){
    const { musics, error, loading, prevSearch } = this.state;  //formOption apagado
    let musicInfo = null;

    if (musics) {
      var count = Object.keys(musics).length; //tamanho do objeto JSON (NÃO É O DESEJADO /// APENAS PARA FINS DE TESTES)
      //console.log(count)                      //
      if (count === 0) {              //musics.length
        musicInfo = (
          <>
          <h3>Não encontramos nenhuma música relacionada a pesquisa</h3>
          </>
        );

      } else if (count > 0) {        //musics.length
        //var json_str = JSON.stringify(this.state.musics);
        //console.log(json_str)
        musicInfo = (
          <>
            <h2 className='search-results'>Resultados para: {prevSearch}</h2>
            <form className='submit-music' onSubmit={this.createMusic}>
              <input className='botao-enviar' type="submit" value="Enviar" />

              {musics.map(music => (
                  <div className='music-component' key={`music__${music.id}`}>
                    <label>
                      <div className='music-details'>
                          <img
                              className="music-image"
                              src={music.album['cover']}
                              alt="music cover"
                          />
                          <div className='music-info'>
                            <h1 className='music-title'>{music.title}</h1>
                            <p className='artist-name'>{music.artist['name']}</p>
                          </div>
                          <input 
                            className='radio-button'
                            type="radio" 
                            value={music.id}
                            name='music' 
                            onChange={e => this.handleOptionChange(music.title, music.artist['name'], music.album['cover'])}
                          />  
                      </div>
                    </label>
                  </div>
              ))}

          </form>
          </>
        );
      }
    }

    if (error) {
      musicInfo = (
        <h3>
          Algo deu errado :/
        </h3>
      );
    }

    if (loading) {
      musicInfo = <h3>Buscando músicas</h3>;
    }


    return (
      <>
        <Bar />
        <Link to={{pathname: `/details/${this.props.match.params.id}`}}><img src="/back_button.png" alt="return" className="back" /></Link>

        <div className='search'>
          <h1 className='instruction'>Faça uma busca pelo nome de uma música ou artista</h1>
          <p className='instruction'>Ao selecionar um item, pressione o botão 'Enviar' para postar a música no tópico desejado</p>
          <form className="search-form-wrapper" onSubmit={this.handleSubmit}>
              <input
                className="search-input"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Nome da música ou artista"
              />
            <input className='botao-busca' type="submit" value="Buscar" />
          </form>
        </div>
      {musicInfo ? musicInfo : null}
    </>
    );
  }
}

export default Search;

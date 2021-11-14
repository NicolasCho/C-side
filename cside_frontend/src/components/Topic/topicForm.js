import React from "react";
import {useState } from "react";
import axios from "axios";
import "./topicForm.css"

export default function TopicForm(props) {
  const [topicString, setTopic] = useState("");

  const topicChanged = (event) =>{
    setTopic(event.target.value);
  }

  const CreateTopic = (event) => {
    event.preventDefault();
    axios
      .post("https://infinite-woodland-71982.herokuapp.com/api/topics/create/", {topic_str:topicString})
      .then((response) =>{
        setTopic("");
        props.onSubmitForm();
      });
  }

  return( 
    <div className="topic-form">
      <div className="instruction">
        <h1>Crie um tópico pedindo sugestões de músicas para outos usuários</h1>
        <p>Inicie um tópico no campo abaixo pedindo sugestões de músicas (ex: Músicas para estudar).</p> 
        <p>Outros usuários poderão recomendar músicas utilizando a ferramenta de busca</p>
      </div>

      <form className="create-topic" onSubmit={CreateTopic}>
        <textarea
          className="string-topic"
          type="text"
          placeholder="Inicie um tópico!"
          value={topicString}
          onChange={topicChanged}
          maxLength="400"
        />
        <button className="btn" type="submit" disabled={topicString.length<1}>Criar</button>
      </form>
    </div>);
}

import TopicForm from "./components/Topic/topicForm";
import Bar from "./components/Bar/Bar"
import { useEffect, useState } from "react";
import "./App.css";
import { Link } from 'react-router-dom'
import axios from "axios";

//Página inicial. Apresenta todos os tópicos já criados e permite criar um novo tópico
function App() {
  const [topics, setTopics] = useState([]);

  const loadData = () =>{
    axios
      .get("https://infinite-woodland-71982.herokuapp.com/api/topics/")
      .then((res) => setTopics(res.data));
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="App">
        <Bar />
        <TopicForm onSubmitForm={loadData}/>
        <h2>Tópicos criados:</h2>
        <div className="topic-list">
          {topics.map(topic => (
                <Link to={{pathname: `details/${topic.id}`}} style={{ textDecoration: 'none' }} key={`TOPIC__${topic.id}`} >
                  <span className="topic-box" style={{"display": "block"}} >                       
                        <h1 className='topic-content'>
                          {topic.topic_str}
                        </h1>                         
                  </span>
                </Link> 
          ))}
        </div>
      </div>
    </>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
//사용자 정의 태그 = 컴포넌트:리액트의 본질. 여러 태그를 하나의 독립된 부품(컴포넌트)로 만들기 가능. 함수로 사용. React의 사용자 정의 태그는 첫글자를 대문자로 쓴다. 
function Header(props) { 
  console.log('props', props, props.title);
  return ( 
    <header>
      <h1><a href="/">{props.title}</a></h1>      
    </header>
  );
}
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return ( //괄호 없애고 <nav> 태그를 () 자리에 옮겨야함.
    <nav>
      <ol>
        {lis}  
      </ol>
    </nav>
  );
}
function Article(props) {  
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title="Web"></Header>     
      <Nav topics="{topics}"></Nav>      
      <Article title="Welcome" body="Hello, Web"></Article>     
    </div>
  );
}

export default App;

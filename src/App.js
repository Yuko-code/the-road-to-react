import * as React from 'react';

const list =[
  {
    title:'React',
    url:'https://rectjs.org/',
    author:'Jordan Wlake',
    num_comments:3,
    points: 4,
    objectId:0,
  },
  {
    title:'Redux',
    url:'https://redux.js.org/',
    author:'Dan Abramov, Andre Clark',
    num_comments:2,
    points: 5,
    objectId:1,
  }
]

function App() {
  const title='React';

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search</label>
      <input id="search" typ="text" />

      <hr />
      {/* render the lsit here */}
      <ul>
        {list.map(function(item){
          return (<li key={item.objectId}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>);
        })}
      </ul>
    </div>
  );
}

export default App;

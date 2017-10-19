import React from 'react';

class App extends React.Component {
   render() {

      var myStyle = {
        fontSize: 100,
        color: '#FF0000'
      }

      return (
         <div>
            <h1>Header</h1>
            <h2 style = {myStyle}>red</h2>
            <p data-myattribute = 'somevalue'>text</p>
         </div>
      );
   }
}

export default App;

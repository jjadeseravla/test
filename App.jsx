import React from 'react';

class App extends React.Component {
   render() {

      var i = 1;

      return (
         <div>
            <h1>Header</h1>
            <h2>{i == 1 ? 'true' : 'false'}</h2>
            <p data-myattribute = 'somevalue'>text</p>
         </div>
      );
   }
}

export default App;

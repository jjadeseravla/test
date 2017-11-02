import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         text: 'Please press Dino to let him know how you feel'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
      this.setState({text: 'He knows now :)'});
   };

   render() {
       return (
          <div>
            <h2>{this.state.text}</h2>
             <button><img src="./images/smileDino.png" alt="dino1" onClick = {this.updateState}/></button>
             <button><img src="./images/dino.jpg" alt="dino2" onClick = {this.updateState}/></button>
             <button><img src="./images/dino.jpg" alt="dino3" onClick = {this.updateState}/></button>
             <button><img src="./images/dino.jpg" alt="dino4" onClick = {this.updateState}/></button>
             <button><img src="./images/madDino.png" alt="dino5" onClick = {this.updateState}/></button>
             <h3> Thank you for answering our survey, please leave your email if you would like updates </h3>
             <input type = "text" value = {this.state.data}
               onChange = {this.updateState} />
          </div>
       );

    }
 }






















//
// class Content extends React.Component {
//   componentWillMount() {
//     console.log('component will mount')
//   }
//
//   componentDidMount() {
//     console.log('Component DID MOUNT!')
//  }
//     componentWillReceiveProps(newProps) {
//        console.log('Component WILL RECIEVE PROPS!')
//     }
//
//     shouldComponentUpdate(newProps, newState) {
//        return true;
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//        console.log('Component WILL UPDATE!');
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//        console.log('Component DID UPDATE!')
//     }
//
//     componentWillUnmount() {
//        console.log('Component WILL UNMOUNT!')
//     }
//
//     render() {
//       return (
//         <div>
//           <h3>{this.props.myNumber}</h3>
//         </div>
//       );
//     }

// }

export default App;

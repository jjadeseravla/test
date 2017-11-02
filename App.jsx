import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: 'Please press Dino to let him know how you feel'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
      this.setState({data: 'He knows now :)'});
   };

   render() {
       return (
          <div>
            <h4>{this.state.data}</h4>
             <button><img src="./images/smileDino.jpg" alt="dino1" onClick = {this.updateState}/></button>
             <button><img src="./images/dino.jpg" alt="dino2" onClick = {this.updateState}/></button>
             <button><img src="./images/dino.jpg" alt="dino3" onClick = {this.updateState}/></button>
             <button><img src="./images/dino.jpg" alt="dino4" onClick = {this.updateState}/></button>
             <button><img src="./images/madDino.png" alt="dino5" onClick = {this.updateState}/></button>
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

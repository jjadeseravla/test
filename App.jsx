import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: 'initial data...'
      }

      this.updateState = this.updateState.bind(this);
   };

   updateState(e) {
      this.setState({data: 'data updated...'});
   };

   render() {
       return (
          <div>
             <button onClick = {this.updateState}>CLICK</button>
             <h4>{this.state.data}</h4>
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

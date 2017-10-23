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
      this.setState({data: e.target.value});
   };

   render() {
       return (
          <div>
             <input type = "text" value = {this.state.data}
                onChange = {this.updateState} />
             <h4>{this.state.data}</h4>
          </div>
       );
    }
 }

 class Content extends React.Component {

   render() {
     return (
       <div>
        <input type = "text" value = {this.props.myDataProp}
          onCHange = {this.props.updateStateProp} />
        <h3>{this.props.myDataProp}</h3>
      </div>
     )
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

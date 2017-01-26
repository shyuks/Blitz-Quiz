// import React, {Component} from 'react';
// import Topics from './Topics';
// import Questions from './Questions';
// import Results from './Results';


// class Lecture extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentClass: props.class.name,
//       teacher: props.teacher.name,
//       topic: null,
//       finished: false
//     };
//   }

//   getTopic(newTopic){
//     this.setState({topic: newTopic})
//   }

//   endTest(){
//     this.setState({finished: true})
//   }

//   render() {

//     if(this.state.topic === null && !this.state.finished){
//       return (
//           <div>
//             <Topics getTopic={this.getTopic.bind(this)}
//                     currentClass={this.state.currentClass}>
//             </Topics>
//           </div>
//         );
//     } else if (this.state.topic !== null && !this.state.finished){
//       return (
//         <div>
//           <Questions topic={this.state.topic}
//                       endTest={this.endTest.bind(this)}>
//           </Questions>
//         </div>
//       );
//     } else if (this.state.topic !== null && this.state.finished){
//       return(
//         <div>
//           <Results topic={this.state.topic}>
//           </Results>
//         </div>
//       );
//     }
//   }
// }

// export default Lecture;
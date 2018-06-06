import React from "react";
// import { createStore } from "redux";

// //Action
// const incrementCount = ( {incrementBy = 1} = {} ) => ({
//   type: 'INCREMENT',
//   incrementBy
// });
// //Reducer

// const countReducer = (state = { count: 0 }, action) => {
//   switch (action.type) {
//       case 'INCREMENT':
//       return {
//         count: state.count + action.incrementBy
//       };
//       default:
//       return state;
//   }
// }

// // Action Generator
// const store = createStore(countReducer);


// store.subscribe(() => {
//     console.log(store.getState());
// });

// // Dispatcher
// store.dispatch(incrementCount({ incrementBy: 5 }));
// store.dispatch(incrementCount());


const HelpPage = () => (
  <div className="content-container">
    <p>This a help Page</p>
  </div>
);

export default HelpPage;

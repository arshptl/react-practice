import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';    
import { counterActions } from '../store/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showToggle = useSelector(state => state.counter.showCounter)

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleCounter());
  };
  
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>
          increment
        </button>
        <button onClick={decrementHandler}>
          decrement
        </button>
        <button onClick={increaseHandler}>
          Increase by 10
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{

//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {
    
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>
//             increment
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>
//             decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   };
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({type: 'decrement'}),

//   }
// }

export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
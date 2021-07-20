import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";
import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
};

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);

    const nextState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_STEPS:
        let steps = {};
        for(let i = 0; i < action.steps.length; i ++) {
          steps[action.steps[i].id] = action.steps[i];
        }
        return steps;

      case RECEIVE_STEP:
        nextState[action.step.id] = action.step;
        return nextState;

      case REMOVE_STEP:
        delete nextState[action.step.id];
        return nextState;

      // -------------------------------------------------------------
      // *** Below, the case will remove steps of a todo if the todo is deleted
      // case REMOVE_TODO:
      //   for(let step in nextState) {
      //     if(nextState[step].todo_id === action.todo.id) {
      //       delete nextState[step]
      //     }
      //   }
      //   return nextState;
      // -------------------------------------------------------------

      default:
        return state;
    }
  };
  
  export default stepsReducer;
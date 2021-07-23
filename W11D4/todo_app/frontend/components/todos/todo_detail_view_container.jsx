import TodoDetailView from "./todo_detail_view";
import { connect } from "react-redux";
// import { allTodoSteps } from "../../reducers/selectors";
import { receiveSteps } from "../../actions/step_actions";

// const mapStateToProps = (state) => {
//     return ({
//         steps: allTodoSteps(state, todo)
//     });
// }

const mapDispatchToProps = (dispatch) => {
    return ({
        receiveSteps: (steps) => dispatch(receiveSteps(steps)),
        // receiveStep: (step) => dispatch(receiveStep(step)),
        // removeStep: (step) => dispatch(removeStep(step))
    });
}

export default connect(null, mapDispatchToProps)(TodoDetailView);








// step list container
// receiveStep --> create new step
// 
// step list item container
// receiveStep --> update step
// removeStep --> delete step
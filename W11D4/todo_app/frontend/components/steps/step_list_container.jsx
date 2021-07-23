import StepList from "./step_list";
import { connect } from "react-redux";
import { stepsByTodoId } from "../../reducers/selectors";
import { receiveStep } from "../../actions/step_actions";

const mapStateToProps = (state, ownProps) => { // state is store's state
    return ({
        steps: stepsByTodoId(state, ownProps.todo_id),
        todo_id: ownProps.todo_id
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        receiveStep: (step) => dispatch(receiveStep(step)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
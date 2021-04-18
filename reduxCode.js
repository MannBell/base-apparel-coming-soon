import { createStore } from "redux";

const EMAILTYPING = "EMAILTYPING";
const EMAILKEYDOWN = "EMAILKEYDOWN";
const INVALIDSUBMIT = "INVALIDSUBMIT";
const SUBMITBUTTONCLICK = "SUBMITBUTTONCLICK";

const emailTyping = (e) => ({
  type: EMAILTYPING
  , value: e.target.value
})

const emailKeyDown = () => ({
  type: EMAILKEYDOWN
})

const invalidSubmit = () => ({
  type: INVALIDSUBMIT
})

const handleButtonClick = () => ({
  type: SUBMITBUTTONCLICK
})

const initialState = {
  emailIsValid: true
  , emailValue: ""
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case  EMAILTYPING
    : {
      return {...state, emailValue: action.value}
    }
    case EMAILKEYDOWN
    : {
      return {...state, emailIsValid: true}
    }
    case  INVALIDSUBMIT
    : return {...state, emailIsValid: false}
    case SUBMITBUTTONCLICK
    : if (!state.emailValue.length) return {...state, emailIsValid: false};
    default
    : return state
  }
}

export const store = createStore(reducer);

export const mapStateToProps = (state) => ({
  emailIsValid: state.emailIsValid
  , emailValue: state.emailValue
});

export const mapDispatchToProps = (dispatch) => ({
  emailTyping: (e) => dispatch(emailTyping(e))
  , emailKeyDown: () => dispatch(emailKeyDown())
  , invalidSubmit: () => dispatch(invalidSubmit())
  , handleButtonClick: () => dispatch(handleButtonClick())
});
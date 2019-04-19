import * as types from "../actions/ActionTypes"

const AdminProfile = (state = null, action) => {
  switch (action.type) {
    case types.SetUserProfile:
      state = action.profile;
      return state;
      case types.UnSetUserProfile:
      state = null;
      return state;
    default:
      return state
  }
};
export default AdminProfile

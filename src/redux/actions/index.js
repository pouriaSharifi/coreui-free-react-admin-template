import * as types from "./ActionTypes"

//-----------------------------------------------------------------------------
const SetUserProfile = profile => ({
  type : types.SetUserProfile,
  profile
});

export const SetAdminProfile = (profile) => dispatch => {
  dispatch(SetUserProfile(profile))
};
//-----------------------------------------------------------------------------
const UnSetUserProfile = () => ({
  type : types.UnSetUserProfile,

});

export const UnSetAdminProfile = () => dispatch => {
  dispatch(UnSetUserProfile())
};
//-----------------------------------------------------------------------------

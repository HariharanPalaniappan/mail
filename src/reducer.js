const settingReducer = function (state = {listMode:"classic"}, action) {
    var newState = state;
    switch (action.type) {
      case "setClassic":
        return "classic";
      case "setCompact":
        return "compact";
      default:
        return state;
    }
  };
  export default settingReducer;
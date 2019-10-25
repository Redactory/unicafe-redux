const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const changedGoodState = {...state};
      changedGoodState.good = changedGoodState.good + 1;

      return changedGoodState
    case 'OK':
      const changedOKState = {...state};
      changedOKState.ok = changedOKState.ok + 1;

      return changedOKState
    case 'BAD':
      let changedBadState = {...state};
      changedBadState.bad = changedBadState.bad + 1;

      return changedBadState
    case 'ZERO':
      let changedZeroState = {...state};
      changedZeroState.good = 0;
      changedZeroState.ok = 0;
      changedZeroState.bad = 0;

      return changedZeroState
    default: return state
  }
  
}

export default counterReducer
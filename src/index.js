import ACTIONS from './constants';
import { goal, skiDay, allSKiDays, error, fetching } from './store/reducers';

const setGoalState = 10;
const skiDayState = null;
const allSKiDaysState = [
  {
    resort: 'Kirkwood',
    date: '2016-12-16',
    powder: true,
    backcountry: false,
  },
  {
    resort: 'Mt Tallac',
    date: '2016-12-9',
    powder: false,
    backcountry: true,
  },
];
const errorState = ['user not authorized', 'server feed not found'];
const noFetchingState = false;
const fetchingState = true;

const setGoalAction = {
  type: ACTIONS.SET_GOAL,
  payload: 15,
};
const skiDayAction = {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Heavanly',
    date: '2016-12-7',
    powder: true,
    backcountry: false,
  },
};
const addSKiDaysAction = {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Squaw Valley',
    date: '2016-12-14',
    powder: false,
    backcountry: false,
  },
};
const removeSkiDaysAction = {
  type: ACTIONS.REMOVE_DAY,
  payload: '2016-12-9',
};
const addErrorAction = {
  type: ACTIONS.ADD_ERROR,
  payload: "can't connect to server",
};
const removeErrorAction = {
  type: ACTIONS.CLEAR_ERROR,
  payload: 0,
};
const fetchAction = {
  type: ACTIONS.FETCH_RESORT_NAMES,
};
const cancelFetchingAction = {
  type: ACTIONS.CANCEL_FETCHING,
};

const nextSetGoalState = goal(setGoalState, setGoalAction);
const nextSkiDayState = skiDay(skiDayState, skiDayAction);
const addAllSKiDaysState = allSKiDays(allSKiDaysState, addSKiDaysAction);
const removeAllSKiDaysState = allSKiDays(allSKiDaysState, removeSkiDaysAction);
const newErrorState = error(errorState, addErrorAction);
const removedErrorState = error(errorState, removeErrorAction);
const isFetchingState = fetching(noFetchingState, fetchAction);
const notFetchingState = fetching(fetchingState, cancelFetchingAction);

// eslint-disable-next-line
console.log(`
  set goal action: ${JSON.stringify(setGoalAction)}
  ski day action: ${JSON.stringify(skiDayAction)}
  add ski days action: ${JSON.stringify(addSKiDaysAction)}
  remove ski days action: ${JSON.stringify(removeSkiDaysAction)}
  add error action: ${JSON.stringify(addErrorAction)}
  remove error action: ${JSON.stringify(removeErrorAction)}
  fetching action: ${JSON.stringify(fetchAction)}
  cancel fetching action: ${JSON.stringify(cancelFetchingAction)}

  new goal: ${nextSetGoalState}
  new day: ${JSON.stringify(nextSkiDayState)}
  add days: ${JSON.stringify(addAllSKiDaysState)}
  remove days: ${JSON.stringify(removeAllSKiDaysState)}
  new error: ${JSON.stringify(newErrorState)}
  removed error: ${JSON.stringify(removedErrorState)}
  is fetching: ${isFetchingState}
  not fetching: ${notFetchingState}
`);

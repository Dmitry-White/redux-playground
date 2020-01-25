import ACTIONS from './constants';
import { goal, skiDay, allSKiDays, error } from './store/reducers';

const setGoalState = 10;
const skiDayState = null;
const allSKiDaysState = [
  {
    resort: 'Kirkwood',
    data: '2016-12-7',
    powder: true,
    backcountry: false,
  },
];
const errorState = ['user not authorized', 'server feed not found'];

const setGoalAction = {
  type: ACTIONS.SET_GOAL,
  payload: 15,
};
const skiDayAction = {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Heavanly',
    data: '2016-12-16',
    powder: true,
    backcountry: false,
  },
};
const allSKiDaysAction = {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Squaw Valley',
    data: '2016-12-8',
    powder: false,
    backcountry: false,
  },
};
const addErrorAction = {
  type: ACTIONS.ADD_ERROR,
  payload: "can't connect to server",
};
const removeErrorAction = {
  type: ACTIONS.CLEAR_ERROR,
  payload: 0,
};

const nextSetGoalState = goal(setGoalState, setGoalAction);
const nextSkiDayState = skiDay(skiDayState, skiDayAction);
const newAllSKiDaysState = allSKiDays(allSKiDaysState, allSKiDaysAction);
const newErrorState = error(errorState, addErrorAction);
const removedErrorState = error(errorState, removeErrorAction);

// eslint-disable-next-line
console.log(`
  initial goal: ${skiDayState}
  set goal action: ${JSON.stringify(setGoalAction)}
  ski day action: ${JSON.stringify(skiDayAction)}
  all ski days action: ${JSON.stringify(allSKiDaysAction)}
  add error action: ${JSON.stringify(addErrorAction)}
  remove error action: ${JSON.stringify(removeErrorAction)}
  new goal: ${nextSetGoalState}
  new day: ${JSON.stringify(nextSkiDayState)}
  all days: ${JSON.stringify(newAllSKiDaysState)}
  new error: ${JSON.stringify(newErrorState)}
  removed error: ${JSON.stringify(removedErrorState)}
`);

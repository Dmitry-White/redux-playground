const consoleMessages = (store) => (next) => (action) => {
  console.groupCollapsed(`Dispaching action: ${action.type}`);

  console.log(`ski days: ${store.getState().allSkiDays.length}`);

  const result = next(action);
  const { allSkiDays, goal, resortNames } = store.getState();

  console.log(`
    State
    =============
    ski days: ${allSkiDays.length}
    goal: ${goal}
    resorts: ${JSON.stringify(allSkiDays)}
    fetching: ${JSON.stringify(resortNames.fetching)}
    suggestions: ${JSON.stringify(resortNames.suggestions)}
  `);

  console.groupEnd();

  return result;
};

export { consoleMessages };

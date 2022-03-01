export function getAppointmentsForDay(state, day) {
  if (!state.days || !day){
    return []
  }

  //const selectedDay = state.days.filter(eachDay => eachDay.name === day)[0]
  const selectedDay = state.days.find(eachDay => eachDay.name === day)
  if (!selectedDay){
    return []
  }

  const appointmentsForDay = selectedDay.appointments.map(appId => ({...state.appointments[appId]}))
  if (!appointmentsForDay){
    return []
  }

  const closeOff = {id: 99, time: '5pm', interview: null}
appointmentsForDay.push(closeOff);

return appointmentsForDay;

}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    let interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  }
}

export function getInterviewsForDay(state, day) {
  const filteredAppointments = [];
  state.days.forEach(element => {
    if (element.name === day) {
      element.interviewers.forEach(id => {
        filteredAppointments.push(state.interviewers[id]);
      });
    }
  });
  return filteredAppointments;
}
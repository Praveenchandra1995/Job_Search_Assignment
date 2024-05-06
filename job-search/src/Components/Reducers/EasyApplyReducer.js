const initialState = {
    Applications: [],
  };
  
  const ApplicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Job-application":
        const { role, experience, salary, location, TechStack, companyNames} = action.payload;
        const newApplication = {
            role,
            location,
            experience,
            salary,
            companyNames,
            TechStack,
        };
        return {
          ...state,
          Applications: [...state.Applications, newApplication]
        };
      default:
        return state;
    }
  };
  
  export default ApplicationReducer;
  
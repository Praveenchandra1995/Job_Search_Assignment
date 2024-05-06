
const initialState={
    Applications:[],
}

const ApplicationReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Job-application":
            const { role,experience,salary,location,TechStack,companyNames} = action.payload;
            const newApplication = {
                role,experience,salary,location,TechStack,companyNames
    
            };
            return {
              ...state,
              // Update state immutably by spreading the previous applications array and adding the new application
              Applications: [...state.Applications, newApplication]
            };
          default:
            return state;
        }
    }
    
export default ApplicationReducer;
import React, { useState ,useEffect} from "react";
import { useDispatch ,useSelector} from "react-redux";
export default function Body(){
    const dispatch=useDispatch();
    const applications = useSelector(state => state.Applications);

console.log(applications)
    // const data=fetch("https://api.weekday.technology/adhoc/getSampleJdJSON")
    // .then(res=>res.json())
    // .then(info=>{
    //     console.log(info)
    // })
    // console.log(data)
    const[role,setRole]=useState("");
    const[experience,setExperience]=useState("");
    const[TechStack,setTechstack]=useState("");
    const[location,setLocation]=useState(" ")
    const[salary,setSalary]=useState("");
    const[companyNames,setCompanyname]=useState("");
    const [jobs, setJobs] = useState([]);
useEffect(() => {
    const fetchData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        try {
            const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const responseData = await response.json();
            if (Array.isArray(responseData.jdList)) {
                setJobs(responseData.jdList); // Update to setJobs(responseData.jdList)
            } else {
                console.error("Invalid data format:", responseData);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    fetchData();
}, []);
console.log(jobs)

// action handling in reducer
debugger;
const HandleApplication=(event,info)=>{

    event.preventDefault();
    const ApplicationInfo={
      role,
      location,
      experience,
      salary,
      companyNames,
      TechStack,
      info
    }
    dispatch({type:"Job-application",payload:ApplicationInfo})
}
    
// option state  handling
    const handleRole=(e)=>{
        setRole(e.target.value);
    }
    const handleLocation=(e)=>{
        setLocation(e.target.value)
    }
    const handleExperience=(e)=>{
        setExperience(e.target.value);
    }
    
    const handleTechStack=(e)=>{
        setTechstack(e.target.value);
    }
    const handleSalary=(e)=>{
        setSalary(e.target.value);
    }
    const handleCompanyName=(e)=>{
        setCompanyname(e.target.value);
    }
    
    return(
        
        <div className="container-fluid">
            <div className="m-1 p-1 text-dark bg-white fs-1 fw-bold">
            
                <form>
                    
                    <div className="d-flex flex-row">
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3 text-black " onChange={handleRole} value={role}>
                <option className="form-option" value="">Select Role</option>

                    {[...new Set(jobs.map((info)=>info.jobRole))].map((roleOption,index)=>(
                
                
                                                                        <option className="form-option text-black" >{roleOption}</option>

                    ))}

                    
                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleLocation} value={location}>
                    <option className="form-option">Select Location</option>
                   {/* filter for location and work type implemented in one select form */}
                    {[...new Set(jobs.map((info)=>info.location))].map((locationplace,index)=>(
                                                                        <option className="form-option text-black" >{locationplace}</option>

                    ))}

                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleExperience} value={experience}>
                    <option className="form-option" >Select Experience</option>
                    {[...new Set(jobs.map((info)=>info.minExp))].map((exp,index)=>(
                                                                        <option className="form-option text-black">{exp}</option>

                    ))}

                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleTechStack} value={TechStack}>
                    <option className="form-option">Select Working Tech Stack</option>
                    {/* no tech stack specified in upi,so assumed tech stack as job role result in upi */}
                    {[...new Set(jobs.map((info)=>info.jobRole))].map((roless,index)=>(
                                                                        <option className="form-option text-black" >{roless}</option>

                    ))}

                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3"onChange={handleSalary} value={salary}>
                    <option className="form-option" >Minimum Base Pay Salary</option>
                    {[...new Set(jobs.map((info)=>info.minJdSalary))].map((salarys,index)=>(
                                                                        <option className="form-option text-black">{salarys} Lakhs</option>

                    ))}

                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleCompanyName} value={companyNames}>
                    <option className="form-option">Search Company Name</option>
                    {[...new Set(jobs.map((info)=>info.companyName))].map((name,index)=>(
                                                                        <option className="form-option text-black">{name}</option>

                    ))}

                   
                </select>
                </div>
                </div>
                </form>
            </div>
            <div>
                <div className="container-fluid d-flex flex-wrap">
                 
                    {
                        
                    jobs.filter(info=>(role===""||info.jobRole===role)&&(companyNames===""||info.companyName===companyNames)&&(TechStack===""||info.jobRole===TechStack)&&(experience===""||parseInt(info.minExp)>=parseInt(experience))&&(salary===""||parseInt(info.minJdSalary)>=parseInt(salary))&&(location===""||info.location===location)).map((job,index)=>{
//min salary filter is appplied ,if info.jdSalary is equal or greter than salary state in select minimum salary state option.
//experience filter is appplied ,if info.minExp is equal or greter than experience state in select experience state option.
//company filter is appplied ,if info.companyname is equal or greter than companynamestate state in select companyName state option.
//company jobRole is appplied ,if info.jobRole is equal or greter than companynamestate state in select companyName state option.
// company location and work mode is filtered based on location.
                        //techstack assumed as job role because there is no tech stack mention in api 

                        return(
                            <div className="card w-25  fs-1 border border-grey rounded m-3 p-1"  key={index}>
<div className="card-header fs-5 pb-0 text-start">
    <img src={job.logoUrl} alt="img" className="w-100 h-25 p-1 rounded"/>
    <span><span className="fw-bold fs-6">Job-Title:</span>{job.jobRole}</span>
    <br/>
    <span><span className="fw-bold fs-6">Company-Name:</span>{job.companyName}</span>
    <br/>
    <span><span className="fw-bold fs-6">Location:</span>{job.location}</span>
    <br/>
</div>
<div className="card-body  fs-5 text-start flex-body ">
    <p className="description"><span className="fw-bold fs-6">Job-Description:</span>{job.jobDetailsFromCompany}</p>
    {/* text is scrollable .this effect is done using css */}
    <br/>
    
    <div><span className="fw-bold fs-6">Experience-Required: </span>
    <br/>
        <span><span className="fw-bold fs-6">Min-Exp:</span>{job.minExp}Years</span>
        <br/>
        <span><span className="fw-bold fs-6">Max-Exp:</span>{job.maxExp}Years</span>
        <br/>
        </div>
        <div>Salary-Range: 
    <br/>
        <span><span className="fw-bold fs-6">Min-Salary:</span>{job.minJdSalary} Lakhs</span>
        <br/>
        <span>Max-Salary:{job.maxJdSalary} Lakhs</span>
        <br/>
        </div>
        

</div>

<div className="card-footer fs-5 p-2 ">
    <button className="btn btn-success w-100 text-center text-white fw-bold mb-1" onClick={(e)=>HandleApplication(e,job)}>Easy Apply</button>
    


</div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
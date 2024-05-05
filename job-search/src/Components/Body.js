import React, { useState ,useEffect} from "react";

export default function Body(){

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
    const[companyName,setCompanyname]=useState("");
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
                <select className="form-select p-3 text-black " onChange={handleRole}>
                <option className="form-option" value="">Select Role</option>

                    {[...new Set(jobs.map((info)=>info.jobRole))].map((roleOption,index)=>(
                
                
                                                                        <option className="form-option text-black" value={role}>{roleOption}</option>

                    ))}

                    
                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleLocation}>
                    <option className="form-option" value={location}>Select Location</option>
                   {/* filter for location and work type implemented in one select form */}
                    {[...new Set(jobs.map((info)=>info.location))].map((locations,index)=>(
                                                                        <option className="form-option text-black" value={location}>{locations}</option>

                    ))}

                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleExperience}>
                    <option className="form-option" value={experience}>Select Experience</option>
                    {[...new Set(jobs.map((info)=>info.minExp))].map((exp,index)=>(
                                                                        <option className="form-option text-black" value={experience}>{exp}</option>

                    ))}

                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleTechStack}>
                    <option className="form-option" value={TechStack}>Select Working Tech Stack</option>
                    {/* no tech stack specified in upi,so assumed tech stack as job role result in upi */}
                    {[...new Set(jobs.map((info)=>info.jobRole))].map((roless,index)=>(
                                                                        <option className="form-option text-black" value={TechStack}>{roless}</option>

                    ))}

                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3"onChange={handleSalary}>
                    <option className="form-option" value={salary}>Minimum Base Pay Salary</option>
                    {[...new Set(jobs.map((info)=>info.minJdSalary))].map((salarys,index)=>(
                                                                        <option className="form-option text-black" value={salary}>{salarys}</option>

                    ))}

                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onChange={handleCompanyName}>
                    <option className="form-option" value={companyName}>Search Company Name</option>
                    {[...new Set(jobs.map((info)=>info.companyName))].map((name,index)=>(
                                                                        <option className="form-option text-black" value={companyName}>{name}</option>

                    ))}

                   
                </select>
                </div>
                </div>
                </form>
            </div>
            <div>
                <div className="container-fluid d-flex flex-wrap">
                 
                    {
                        
                    jobs.filter((info=>role===""||info.jobRole===role)).map((job,index)=>{
                        debugger;

                        return(
                            <div className="card w-25  fs-1 border border-grey rounded m-3 p-1"  key={index}>
<div className="card-header fs-5 pb-0 text-start">
    <img src={job.logoUrl} alt="img" className="w-100 h-25 p-1 rounded"/>
    <span>Job-Title:{job.jobRole}</span>
    <br/>
    <span>Company-Name:{job.companyName}</span>
    <br/>
    <span>Location:{job.location}</span>
    <br/>
</div>
<div className="card-body  fs-5 text-start flex-body ">
    <p className="description">Job-Description:{job.jobDetailsFromCompany}</p>
    {/* text is scrollable .this effect is done using css */}
    <br/>
    <div>Experience-Required: 
    <br/>
        <span>Min-Exp:{job.minExp}Years</span>
        <br/>
        <span>Max-Exp:{job.maxExp}Years</span>
        <br/>
        </div>

</div>
<div className="card-footer fs-5 p-2 ">
    <button className="btn btn-success w-100 text-center text-white fw-bold mb-1">Easy Apply</button>
    


</div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
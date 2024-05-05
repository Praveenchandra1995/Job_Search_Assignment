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
    const[employees,setEmployees]=useState("");
    const[jobtype,setJobtype]=useState("");
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
    

    const handleRole=(e)=>{
        setRole(e.target.value);
    }
    const handleExperience=(e)=>{
        setExperience(e.target.value);
    }
    const handleEmployees=(e)=>{
        setEmployees(e.target.value);
    }
    const handleJobType=(e)=>{
        setJobtype(e.target.value);
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
                    {jobs.map((info=>{return(
                        <></>
                    )}))}
                    <div className="d-flex flex-row">
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3 " onClick={handleRole}>
                    <option className="form-option" value={role}>Roles</option>
                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onClick={handleEmployees}>
                    <option className="form-option" value={employees}>Number Of Employees</option>
                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onClick={handleExperience}>
                    <option className="form-option" value={experience}>Experience</option>
                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onClick={handleJobType}>
                    <option className="form-option" value={jobtype}>Remote</option>
                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3"onClick={handleSalary}>
                    <option className="form-option" value={salary}>Minimum Base Pay Salary</option>
                   
                </select>
                </div>
                <div className="w-100 h-25 text-secondary fs-1 border border-secondary-subtle rounded m-1">
                <select className="form-select p-3" onClick={handleCompanyName}>
                    <option className="form-option" value={companyName}>Search Company Name</option>
                   
                </select>
                </div>
                </div>
                </form>
            </div>
            <div>
                <div className="d">
                    {jobs.map((job ,index)=>{
                        return(
                            <div className="card w-50  fs-1 border border-grey rounded m-3 p-1 d-flex flex-column" key={index}>
<div className="card-header fs-5 text-start">
    <img src={job.logoUrl} alt="img" className="w-100 h-25 p-1 rounded"/>
    <span>Job-Title:{job.jobRole}</span>
    <br/>
    <span>Company-Name:{job.companyName}</span>
    <br/>
    <span>Location:{job.location}</span>
    <br/>
</div>
<div className="card-body fs-5 text-start">
    <p className="description">Job-Description:{job.jobDetailsFromCompany}</p>
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
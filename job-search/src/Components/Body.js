import React, { useState } from "react";

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
        </div>
    )
}
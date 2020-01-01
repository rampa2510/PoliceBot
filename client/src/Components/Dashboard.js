import React,{useState,useEffect} from 'react';
import Card from './Card';
import '../css/Dashboard.css';
import report from '../images/report.png';
import star from '../images/star.png';
import exam from '../images/exam.png';
import student from '../images/student.png';
import question from '../images/question.png';

const Dashboard = ()=>{
    // Checks if loaded
    const [loaded,setLoaded] = useState(false);
    // gets user's role
    const role = sessionStorage.getItem('role');
    // gets user's username

    // checks if user is logged in
    useEffect(()=>{
        if(role===null)
            window.location='/';
        else
            setLoaded(true);
        
    },[])

    // Loads dashboard based on if user is student or admin
    const loadPage = ()=>{
        if(loaded){
            if(role === "citizen"){
                return(
                    <React.Fragment>
                        <Card img={student} link="/crimeregistration" buttonText="Register Complaint"/>
                        <Card img={star} link="/crimeawareness" buttonText="Crime Awareness"/>
                        <Card img={question} link= "/tracking" buttonText="Complaint Tracking"/>
                    </React.Fragment>
                );
            }
            else if(role=== "policeman"){
                return(
                    <React.Fragment>
                        <Card img={exam} link="/newreports" buttonText="New Reports"/>
                        <Card img={star} link="/myinvestigations" buttonText="My Investigations"/>
                        <Card img={report} link="/tracking" buttonText="Complaint Tracking"/>
                    </React.Fragment>
                );
            }
            else{
                return(
                    <React.Fragment>
                        <Card img={exam} link="/addpoliceman" buttonText="Add Policeman"/>
                        <Card img={exam} link="/managepolicemen" buttonText="Manage Policemen"/>
                        <Card img={report} link="/tracking" buttonText="Complaint Tracking"/>
                    </React.Fragment>
                );
            }
        }
    }

    return(
        <div id="dashboard">
            {loadPage()}
        </div>
    );

}

export default Dashboard;
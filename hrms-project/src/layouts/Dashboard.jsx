import React from "react";
import JobAdvertList from "../pages/JobAdvertList";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";

import { Route, useHistory } from "react-router";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";
import EmployerSignupForm from "../pages/EmployerSignupForm";
import AppliedJobAdvertList from "../pages/AppliedJobAdvertList";
import { ToastContainer } from "react-toastify";
import JobAdvertForm from "../pages/JobAdvertForm";


export default function Dashboard() {
  
const history = useHistory();
  return (
    <div>
      <ToastContainer onClick={()=>history.push(`/applied-job-adverts`)} position="bottom-left"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Sidebar />
          </Grid.Column>
          <Grid.Column width="12">
            <Route exact path="/" component={JobAdvertList}/>
            <Route exact path="/job-adverts" component={JobAdvertList}/>
            <Route path="/job-adverts/:id" component={JobAdvertDetail}/>
            <Route path="/login" component={LoginForm}/>
            <Route  path="/signup" component={SignupForm}/>
            <Route path="/employer-signup" component={EmployerSignupForm}/>
            <Route path="/home" component={JobAdvertList}/>
            <Route path="/applied-job-adverts" component={AppliedJobAdvertList}/>
            <Route path="/job-advert-form" component={JobAdvertForm}/>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

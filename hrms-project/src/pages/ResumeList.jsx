import React, { useEffect, useState } from "react";
import ResumeService from "../services/resumeService";


export default function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();

    resumeService.getResume().then((result) => setResumes(result.data.data));
  }, []);

  return <div>Burada CV Bilgisi Dönecek</div>;
}

import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import KodlamaioTextInput from "../utilities/customFormControls/KodlamaioTextInput";
import { Button } from "semantic-ui-react";
import KodlamaioDateInput from "../utilities/customFormControls/KodlamaioDateInput";
import KodlamaioTextArea from "../utilities/customFormControls/KodlamaioTextArea";
import KodlamaioSelectInput from "../utilities/customFormControls/KodlamaioSelectInput";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import EmployerService from "../services/employerService";

export default function JobAdvertForm() {
  const [employer, setEmployer] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);

  useEffect(() => {
    let cityService = new CityService();

    let employerService = new EmployerService();

    let jobPositionService = new JobPositionService();

    let workTypeService = new WorkTypeService();

    let workTimesService = new WorkTimeService();

    cityService.getCity().then((result) => setCities(result.data.data));

    employerService
      .getEmployer()
      .then((result) => setEmployer(result.data.data));

    jobPositionService
      .getJobPosition()
      .then((result) => setJobPositions(result.data.data));

    workTypeService
      .getWorkType()
      .then((result) => setWorkTypes(result.data.data));

    workTimesService
      .getWorkTime()
      .then((result) => setWorkTimes(result.data.data));
  }, []);

  const initialValues = {
    companyName: "",
    city: "",
    description: "",
    salaryMin: "",
    salaryMax: "",
    openPositionQty: "",
    applicationDeadline: "",
    jobPosition: "",
    workType: "",
    workTime: "",
    employer: 12, //Geçici
  };

  const schema = Yup.object({
    companyName: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    // city: Yup.number().required("Required"),
    description: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("Required"),
    openPositionQty: Yup.number().required("Required"),
    salaryMin: Yup.number().required("Required"),
    salaryMax: Yup.number().required("Required"),
    applicationDeadline: Yup.date().required("Required"),
    workType: Yup.number().required("Required"),
    workTime: Yup.number().required("Required"),
    jobPosition: Yup.number().required("Required"),
  });

  return (
    <>
      <h1>Yeni İş İlanı</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          values.city = parseInt(values.city);
          values.jobPosition = parseInt(values.jobPosition);
          values.workTime = parseInt(values.workTime);
          values.workType = parseInt(values.workType);
          values.employer = parseInt(values.employer);

          const employers = [{ id: 12 }, { id: 22 }];

          values.employer = employers.filter((e) => e.id === values.employer);
          values.employer = values.employer[0];
          console.log(values.employer);

          values.jobPosition = jobPositions.filter(
            (j) => j.id === values.jobPosition
          );
          values.jobPosition = values.jobPosition[0];
          console.log(values.jobPosition);

          values.workTime = workTimes.filter((w) => w.id === values.workTime);
          values.workTime = values.workTime[0];
          console.log(values.workTime);

          values.workType = workTypes.filter((w) => w.id === values.workType);
          values.workType = values.workType[0];
          console.log(values.workType);

          values.city = cities.filter((c) => c.id === values.city);
          values.city = values.city[0];
          console.log(values.city);

          // console.log(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaioTextInput
            name="companyName"
            type="text"
            placeholder="Firma Adı Giriniz"
          />

          <KodlamaioSelectInput name="city">
            <option value="">Şehir Seçiniz</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </KodlamaioSelectInput>

          <KodlamaioTextInput
            name="openPositionQty"
            type="number"
            placeholder="Açık Pozisyon Sayısı Giriniz"
          />

          <KodlamaioTextInput
            name="salaryMin"
            type="number"
            placeholder="Minimum Maaşı Giriniz"
          />
          <KodlamaioTextInput
            name="salaryMax"
            type="number"
            placeholder="Maximum Maaşı Giriniz"
          />

          <KodlamaioTextArea
            name="description"
            rows="6"
            placeholder="İş Açıklaması Giriniz"
          />

          <KodlamaioSelectInput name="jobPosition">
            <option value="">Pozisyon Seçiniz</option>

            {jobPositions.map((jobPosition) => (
              <option key={jobPosition.id} value={jobPosition.id}>
                {jobPosition.name}
              </option>
            ))}
          </KodlamaioSelectInput>

          <KodlamaioSelectInput name="workType">
            <option value="">Çalışma Şeklini Seçiniz</option>
            {workTypes.map((workType) => (
              <option key={workType.id} value={workType.id}>
                {workType.name}
              </option>
            ))}
          </KodlamaioSelectInput>

          <KodlamaioSelectInput name="workTime">
            <option value="">Çalışma Zamanını Seçiniz</option>
            {workTimes.map((workTime) => (
              <option key={workTime.id} value={workTime.id}>
                {workTime.name}
              </option>
            ))}
          </KodlamaioSelectInput>

          <KodlamaioDateInput
            label="İlan Bitiş Tarihi"
            name="applicationDeadline"
            type="date"
            placeholder="Tarih Giriniz"
          />

          <Button style={{ marginTop: "10px" }} color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </>
  );
}

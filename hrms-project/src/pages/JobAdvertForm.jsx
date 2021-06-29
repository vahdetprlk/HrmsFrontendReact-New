import React, { useEffect, useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import KodlamaioTextInput from "../utilities/customFormControls/KodlamaioTextInput";
import { Button } from "semantic-ui-react";
import KodlamaioDateInput from "../utilities/customFormControls/KodlamaioDateInput";
import KodlamaioTextArea from "../utilities/customFormControls/KodlamaioTextArea";
import KodlamaioSelectInput from "../utilities/customFormControls/KodlamaioSelectInput";


export default function JobAdvertForm() {


  const initialValues = {
    companyName: "",
    city: "",
    description: "",
    salaryMin: "",
    salaryMax: "",
    openPosition: "",
    deadlineDate: "",
    jobPosition: "",
    workType: "",
    workTime: "",
  };

  const schema = Yup.object({
    companyName: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    city: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    description: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("Required"),
    openPosition: Yup.number().required("Required"),
    salaryMin: Yup.number().required("Required"),
    salaryMax: Yup.number().required("Required"),
  });

  return (
    <>
      <h1>Yeni İş İlanı</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="ui form">
          <KodlamaioTextInput
            name="companyName"
            type="text"
            placeholder="Firma Adı Giriniz"
          />
          <KodlamaioTextInput
            name="city"
            type="text"
            placeholder="Şehir Giriniz"
          />
          <KodlamaioTextInput
            name="openPosition"
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
            <option value="">Pozisyonu Seçiniz</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </KodlamaioSelectInput>

          <KodlamaioSelectInput name="workType">
            <option value="">Çalışma Şeklini Seçiniz</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Lokal">Lokal</option>
          </KodlamaioSelectInput>

          <KodlamaioSelectInput name="workTime">
            <option value="">Çalışma Zamanını Seçiniz</option>
            <option value="Tam Zamanlı">Tam Zamanlı</option>
            <option value="Yarı Zamanlı">Yarı Zamanlı</option>
          </KodlamaioSelectInput>

          <KodlamaioDateInput
            label="İlan Bitiş Tarihi"
            name="deadlineDate"
            type="date"
            placeholder="Tarih Giriniz"
          />

          <Button style={{marginTop: "10px"}} color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </>
  );
}

import React from "react";
import { Formik, Form, useField} from "formik";
import * as Yup from "yup";


const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-imput" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyDateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="datetime-local" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default function JobAdvertForm() {
  return (
    <>
      <h1>Yeni İş İlanı</h1>
      <Formik
        initialValues={{
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
        }}
        validationSchema={Yup.object({
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
        })}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Firma Adı"
            name="companyName"
            type="text"
            placeholder="Firma Adı Giriniz"
          />
            <MyTextInput
            label="Şehir"
            name="city"
            type="text"
            placeholder="Şehir Giriniz"
          />
          <MyTextInput
            label="Açık Pozisyon Sayısı"
            name="openPosition"
            type="number"
            placeholder="1"
          />

          <MyTextInput
            label="En Düşük Maaş"
            name="salaryMin"
            type="number"
            placeholder="0"
          />
          <MyTextInput
            label="En Yüksek Maaş"
            name="salaryMax"
            type="number"
            placeholder="0"
          />
     

          <MyTextArea
            label="Açıklama"
            name="description"
            rows="6"
            placeholder="İş Açıklaması Giriniz"
          />

          <MySelect label="Pozisyonlar" name="jobPosition">
            <option value="">Pozisyonu Seçiniz</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MySelect label="Çalışma Şekli" name="workType">
            <option value="">Çalışma Şeklini Seçiniz</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Lokal">Lokal</option>
          </MySelect>

          <MySelect label="Çalışma Zamanı" name="workTime">
            <option value="">Çalışma Zamanını Seçiniz</option>
            <option value="Tam Zamanlı">Tam Zamanlı</option>
            <option value="Yarı Zamanlı">Yarı Zamanlı</option>
          </MySelect>

          <MyDateInput
            label="İlan Bitiş Tarihi"
            name="deadlineDate"
            type="date"
            placeholder="Tarih Giriniz"
          />

          

          <button type="submit">
            ekle
          </button>
        </Form>
      </Formik>
    </>
  );
}

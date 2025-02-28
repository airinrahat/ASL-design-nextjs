"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CountryCode = () => {
  const [dialCode, setDialCode] = useState("");

  const formik = useFormik({
    initialValues: {
      primary_phone: "",
    },
    onSubmit: (values) => {
      alert(`Submitted Phone Number: ${dialCode}${values.primary_phone}`);
    },
  });

  return (
    <div className="phone-input-container">
      <h2 className="text-xl font-bold mb-4">Phone Number Input</h2>
      <div onSubmit={formik.handleSubmit}>
        <PhoneInput
          country={"ae"}
          enableSearch={true}
          placeholder="Enter phone number"
          value={`${dialCode}${formik.values.primary_phone}`}
          onChange={(phone, e) => {
            setDialCode(`+${e.dialCode}`);
            formik.setFieldValue(
              "primary_phone",
              phone.slice(e.dialCode.length)
            );
          }}
        />
      </div>
    </div>
  );
};

export default CountryCode;

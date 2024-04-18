import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/appointment.css";

export default function CreateAppointment() {
  const [focused, setFocused] = useState(false);

  //Getting input values
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [date, setDate] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [availableTimeslots, setavailableTimeslots] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();

  const handleFocus = (e) => {
    setFocused(true);
  };

  //Creating new Appointment
  function sendData(s) {
    s.preventDefault();

    //Creating object
    const newAppointment = {
      name,
      address,
      nic,
      email,
      contactNo,
      date,
      reasonForVisit,
      availableTimeslots,
      doctorId,
      doctorName,
    };

    axios
      .post("http://localhost:8070/appointment/addapp", newAppointment)
      .then((response) => {
        console.log(response);

        // Redirect to the appointment details page
        const appointmentId = response.data._id;
        console.log("appointment id", appointmentId);
        navigate(`/appointmentDetails/${appointmentId}`);
      })
      .catch((err) => {
        alert("Error adding Appointment: " + err);
      });
  }

  return (
    <div className="main-container">
      <div className="body-container clearfix">
        <div className="order-section-one-container container-heading">
          <div className="order-section-one-left">
            <h3>ADD APPOINTMENT</h3>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                  <div className="container">
                    <form onSubmit={sendData}>
                      <div className="controls">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <br />
                              <input
                                type="text"
                                id="name"
                                name="name"
                                class="form-control"
                                onChange={(event) => {
                                  setName(event.target.value);
                                }}
                                pattern="[A-Za-z\s]{3,30}"
                                required
                                onBlur={handleFocus}
                                focused={focused.toString()}
                              />
                              <span id="nameSpan">
                                Name should be 3-30 letters and shouldn't
                                include any numbers or special characters!
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="address">Address</label> <br />
                              <input
                                type="text"
                                id="address"
                                name="address"
                                class="form-control"
                                onChange={(event) => {
                                  setAddress(event.target.value);
                                }}
                                pattern="[A-Za-z]{3,12}"
                                onBlur={handleFocus}
                                required
                                focused={focused.toString()}
                              />
                              <span id="addressSpan">
                                Address should be 5-40 letters.
                              </span>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="nic">NIC</label>
                              <br />
                              <input
                                className="form-input"
                                type="text"
                                id="nic"
                                name="nic"
                                class="form-control"
                                onChange={(event) => {
                                  setNIC(event.target.value);
                                }}
                                pattern="(([0-9][vV]|[0-9])){12,13}"
                                required
                                onBlur={handleFocus}
                                focused={focused.toString()}
                              />
                              <span id="nicSpan">
                                NIC should be only 12 digits or 12 digits and
                                letter V and shouldn't include any other letters
                                or special characters!
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                onChange={(event) => {
                                  setEmail(event.target.value);
                                }}
                                required
                                onBlur={handleFocus}
                                focused={focused.toString()}
                              />
                              <span id="emailSpan">
                                Please enter a valid email address!
                              </span>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="contactNo">Contact No</label>
                              <input
                                type="text"
                                id="contactNo"
                                name="contactNo"
                                className="form-control"
                                onChange={(event) => {
                                  setContactNo(event.target.value);
                                }}
                                pattern="^[0-9]{10}$"
                                required
                                onBlur={handleFocus}
                                focused={focused.toString()}
                              />
                              <span id="contactNoSpan">
                                Contact number should contain 10 numbers and
                                shouldn't include any letters or special
                                characters!
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="date">Date</label>
                              <br />
                              <input
                                type="date"
                                id="date"
                                name="date"
                                class="form-control"
                                onChange={(event) => {
                                  setDate(event.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="reasonFrVisit">
                                Reason For Visit
                              </label>
                              <br />
                              <select
                                id="reasonForVisit"
                                name="reasonForVisit"
                                class="form-control"
                                onChange={(event) => {
                                  setReasonForVisit(event.target.value);
                                }}
                                required
                              >
                                <option selected disabled value="0">
                                  --Select Reason--
                                </option>
                                <option value="General Checkup">
                                  General CheckUp
                                </option>
                                <option value="Medical Concerns">
                                  Medical Concerns
                                </option>
                                <option value="Preventive Care">
                                  Preventive Care
                                </option>
                                <option value="other">Other</option>
                              </select>
                              <span>
                                Please select a reason for the appointment from
                                the given list!
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="availableAppointmentSlot">
                                Appointment Slot
                              </label>
                              <br />
                              <select
                                type="text"
                                id="availableAppointmentSlot"
                                name="availableAppointmentSlot"
                                class="form-control"
                                onChange={(event) => {
                                  setavailableTimeslots(event.target.value);
                                }}
                                data-error="Appointment Time Slot is required."
                                required
                              >
                                <option value="0" selected disabled>
                                  --Select Time Slot--
                                </option>
                                <option value="8.00AM-8.30AM">
                                  8.00AM-8.30AM
                                </option>
                                <option value="8.30AM-9.00AM">
                                  8.30AM-9.00AM
                                </option>
                                <option value="9.30AM-10.00AM">
                                  9.30AM-10.00AM
                                </option>
                                <option value="10.00AM-10.30AM">
                                  10.00AM-10.30AM
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="doctorId">Doctor ID</label>
                              <br />
                              <input
                                type="text"
                                id="doctorId"
                                name="doctorId"
                                class="form-control"
                                onChange={(event) => {
                                  setDoctorId(event.target.value);
                                }}
                                data-error="Doctor ID is required."
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label htmlFor="doctorName">Doctor Name</label>
                              <br />
                              <input
                                type="text"
                                id="doctorName"
                                name="doctorName"
                                class="form-control"
                                onChange={(event) => {
                                  setDoctorName(event.target.value);
                                }}
                                data-error="Doctor Name is required."
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="submit"
                            id="submit-btn"
                            className="btn btn-success btn-send  pt-2 btn-block"
                            value="ADD APPOINTMENT"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
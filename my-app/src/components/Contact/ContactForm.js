import React, { useState } from "react";
// react bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";
// data
import { addressData } from "../../data/data";
import axios from "axios";

const ContactForm = () => {
  const [data, setData] = useState(addressData);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    department: "",
    disease: "",
    study: "",
    message: "",
  });

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo(() => {
      return { ...userInfo, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, department, disease, study, zipCode, message } =
      userInfo;

    if (name === "") {
      alert(`Name is required`);
    } else if (email === "") {
      alert(`Email is required`);
    } else if (phone === "") {
      alert("phone number is required");
    } else if (department === "") {
      alert(`please choose one option`);
    } else if (disease === "") {
      alert(`please select one option`);
    } else if (study === "") {
      alert(`please choose one`);
    } else if (zipCode === "") {
      alert(`zip code required`);
    } else if (message === "") {
      alert(`Message is required`);
    } else {
      try {
        // post data to google sheets

        const res = await axios.post(
          "https://sheet.best/api/sheets/64700376-2719-47f2-98c3-707b02b2a56c",
          {
            name,
            email,
            phone,
            zipCode,
            department,
            disease,
            study,
            message,
          }
        );

        if (res.data) {
          alert(`Submission successful! please check google sheet`);
        }
        setUserInfo({
          ...userInfo,
          name: "",
          email: "",
          phone: "",
          zipCode: "",
          department: "",
          disease: "",
          study: "",
          message: "",
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <Row>
        <Col xl={4} lg={4} md={12}>
          {data.map((address) => {
            const { id, icon, label, text } = address;
            return (
              <div className="address d-flex" key={id}>
                <div className="info_icon mx-1 mx-sm-0">
                  <span>{icon}</span>
                </div>
                <div className="info_content mx-3">
                  <h5>{label}</h5>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </Col>
        <Col xl={8} lg={8} md={12}>
          <div className="address_form mt-5 mx-2 mx-sm-0">
            <Form>
              <Row>
                <Form.Group
                  as={Col}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  controlId="formGridText"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={userInfo.name}
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  className="my-3 my-md-0"
                  controlId="formGridEmail"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mt-0 mt-md-3">
                <Form.Group
                  as={Col}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  controlId="formGridPhone"
                >
                  <Form.Control
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    value={userInfo.phone}
                    onChange={handleChange}
                    className="mb-3"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  controlId="formGridPhone"
                >
                  <Form.Control
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={userInfo.zipCode}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group
                  as={Col}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  controlId="department"
                  className="mb-3"
                >
                  <Form.Select
                    name="department"
                    className="formSelect"
                    value={userInfo.department}
                    onChange={handleChange}
                  >
                    <option value="selected">
                      How were you exposed to firefighting foam (AFFF)?
                    </option>
                    <option>Civilian Firefighter</option>
                    <option>Military Firefighter</option>
                    <option>Other Military Service Member</option>
                    <option>Airport Personnel</option>
                    <option>Other Exposure</option>
                    <option>No Exposure</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  as={Col}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  controlId="formGridDoctor"
                  className="mb-3"
                >
                  <Form.Select
                    name="disease"
                    value={userInfo.disease}
                    className="formSelect"
                    onChange={handleChange}
                  >
                    <option value="selected">
                      Did you or a loved one develop any of the these cancers
                      following the exposure?
                    </option>
                    <option name="doctor-1">Kidney Cancer</option>
                    <option name="doctor-2">Pancreatic Cancer</option>
                    <option name="doctor-3">Testicular Cancer</option>
                    <option name="doctor-3">Prostate Cancer</option>
                    <option name="doctor-3">Bladder Cancer</option>
                    <option name="doctor-3">Thyroid Cancer</option>
                    <option name="doctor-3">Thyroid Disease</option>
                    <option name="doctor-3">Thyroid Disease</option>
                    <option name="doctor-3">Liver Disease</option>
                    <option name="doctor-3">Other Cancer Diagnosis</option>
                    <option name="doctor-3">No Cancer</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  as={Col}
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  controlId="formGridDoctor"
                >
                  <Form.Select
                    // defaultValue="Select Doctor"
                    name="study"
                    value={userInfo.study}
                    className="formSelect mb-3"
                    onChange={handleChange}
                  >
                    <option value="selected">
                      Do you already have an attorney representing this case?
                    </option>
                    <option>yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="exampleFormMessage">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={userInfo.message}
                    onChange={handleChange}
                    placeholder="Message"
                  />
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                style={{ color: "#aa9b9b", fontSize: "13px" }}
              >
                <Form.Check
                  readOnly
                  checked
                  label="Agree to terms and conditions and privacy policy"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  className="btn mt-2 border-0 text-uppercase"
                  style={{ background: "#d6e9fa", color: "#000" }}
                  onClick={handleSubmit}
                >
                  Agree and submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;

import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

class Extras extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  formSubmit = async (e) => {
    e.preventDefault();

    // Execute these props functions
    this.props.submitted();
    this.props.nextStep();

    // Get form data from props
    const data = this.props.values;

    try {
      // Send a POST request to the "/create-pdf" endpoint on the server
      const response = await axios.post("/create-pdf", data);

      // Create a Blob from the response data (assuming it's a PDF)
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      // Save the Blob as a file (Resume.pdf)
      saveAs(pdfBlob, "Resume.pdf");
    } catch (error) {
      // Log an error if something goes wrong during the request
      console.error("Error creating or fetching PDF:", error);
    }

    // Reset the form
    e.target.reset();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div className="card animated fadeInLeft">
        <div className="card-body">
          <h3 className="card-title">Miscellaneous</h3>
          <hr />
        </div>
        <form onSubmit={this.formSubmit}>
          <div className="row col-lg-10 mx-auto">
            {[1, 2].map((extraIndex) => (
              <div key={extraIndex} className="col-lg-6 md-form">
                <input
                  type="text"
                  name={`extra_${extraIndex}`}
                  className="form-control"
                  defaultValue={
                    values.status === 1 ? "" : values[`extra_${extraIndex}`]
                  }
                  onChange={handleChange}
                  required
                />
                <label htmlFor={`extra_${extraIndex}`}>
                  Language{extraIndex > 1 ? "s" : ""}/Hobby
                  {extraIndex > 1 ? "ies" : ""}
                </label>
              </div>
            ))}
          </div>
          <br />
          {[3, 4, 5].map((extraIndex) => (
            <div key={extraIndex} className="row col-lg-10 mx-auto">
              <div className="col-lg-6 md-form">
                <input
                  type="text"
                  name={`extra_${extraIndex}`}
                  id={`extra_${extraIndex}`}
                  className="form-control"
                  defaultValue={
                    values.status === 1 ? "" : values[`extra_${extraIndex}`]
                  }
                  onChange={handleChange}
                  required
                />
                <label htmlFor={`extra_${extraIndex}`}>
                  Activity/Achievement
                </label>
              </div>
            </div>
          ))}
          <br />
          <div className="container text-center">
            <button type="button" className="btn btn-info" onClick={this.back}>
              <i className="fas fa-angle-left mr-1"></i>Back
            </button>
            <button type="submit" className="btn btn-info">
              Download PDF<i className="fas fa-download ml-1"></i>
            </button>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default Extras;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Book_UpDateForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/getbook/${id}`)
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5000/updatebook/${id}`, state)
      .then(() => navigate("/DisplayBooksF1"))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book</h3>

      <form onSubmit={OnSubmit}>
        <div className="form-group">
          <label>Book Title:</label>
          <input className="form-control"
            type="text" name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Author:</label>
          <input className="form-control"
            name="author"
            value={state.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Topic:</label>
          <input className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Format:</label>
          <input className="form-control"
            name="formate"
            value={state.formate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Year:</label>
          <input className="form-control"
            type="number" name="PubYear"
            value={state.PubYear}
            onChange={handleChange}
          />
        </div>

        <br />
        <button className="btn btn-primary" type="submit">Update</button>
      </form>
    </div>
  );
}

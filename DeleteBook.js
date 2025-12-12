import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(`http://localhost:5000/deletebook/${id}`)
      .then(() => navigate("/DisplayBooksF1"))
      .catch((err) => console.log(err));
  }, [id, navigate]);

  return (
    <div>
      <h3>Deleting book...</h3>
    </div>
  );
}

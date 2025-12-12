import React from "react";
import { Link } from "react-router-dom";

export default function DisplayData(props) {
  const ShowBooks = () => {
    return props.books.map((bk) => (
      <tr key={bk._id}>
        <td>{bk.booktitle}</td>
        <td>{bk.author}</td>
        <td>{bk.Topic}</td>
        <td>{bk.formate}</td>
        <td>{bk.PubYear}</td>
        <td>
          <Link to={`/edit/${bk._id}`}>Edit</Link>
        </td>
        <td>
          <Link to={`/Delete/${bk._id}`}>Delete</Link>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table table-striped" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Topic</th>
          <th>Format</th>
          <th>Year</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        <ShowBooks />
      </tbody>
    </table>
  );
}

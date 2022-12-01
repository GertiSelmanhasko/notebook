import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Notecreate = () => {
  const [id, idChange] = useState("");
  const [category, categoryChange] = useState("");
  const [noteName, noteNameChange] = useState("");
  const [note, noteChange] = useState("");
  const [date, dateChange] = useState("");
  const navigate = useNavigate();
  const empnote = { category, noteName, note, date };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empnote),
    })
      .then((resp) => {
        alert("saved");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Note create</h2>
                <div className="card-body">
                  <div className="row">
                    <div className="col=lg-12">
                      <div className="form-group">
                        <label>Id</label>

                        <input
                          value={id}
                          disabled="disabled"
                          className="form-control"
                        ></input>
                      </div>

                      <div className="form-group">
                        <label>Category</label>
                        <input
                          value={category}
                          onChange={(e) => categoryChange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label>Note Title</label>
                        <input
                          value={noteName}
                          onChange={(e) => noteNameChange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label>Note</label>
                        <input
                          value={note}
                          onChange={(e) => noteChange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label>Date</label>
                        <input
                          value={date}
                          onChange={(e) => dateChange(e.target.value)}
                          type="date"
                          className="form-control"
                        ></input>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                        <Link to="/" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Notecreate;

import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Noteedit = () => {
  const { noteid } = useParams();
  //   const [noteData, noteDataChange] = useState({});
  const [id, idChange] = useState("");
  const [category, categoryChange] = useState("");
  const [noteName, noteNameChange] = useState("");
  const [note, noteChange] = useState("");
  const [date, dateChange] = useState("");
  const navigate = useNavigate();
  const empnote = { category, noteName, note, date };

  const handleEdit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/notes/" + noteid, {
      method: "PUT",
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

  useEffect(() => {
    fetch("http://localhost:8000/notes/" + noteid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idChange(resp.id);
        categoryChange(resp.category);
        noteNameChange(resp.noteName);
        noteChange(resp.note);
        dateChange(resp.date);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleEdit}>
            <div className="card">
              <div className="card-title">
                <h2>Note Edit</h2>
                <div className="card-body">
                  <div className="row">
                    <div className="col=lg-12">
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
                        <textarea
                          value={note}
                          onChange={(e) => noteChange(e.target.value)}
                          
                          className="form-control"
                        ></textarea>               
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
export default Noteedit;

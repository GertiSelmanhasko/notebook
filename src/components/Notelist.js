import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Notelist = () => {
  const [noteData, noteDatause] = useState(null);
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const loadEdit = (id) => {
    navigate("note/edit/" + id);
  };
  const handleSearch = async (e) => {};

  const removeFunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/notes/" + id, {
        method: "DELETE",
      })
        .then((resp) => {
          alert("Removed successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        noteDatause(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Note list</h2>
        </div>
        <div align={"left"}>
          <form onSubmit={handleSearch}>
            <input
              type={"text"}
              className="form-controll"
              placeholder="Search Note Name"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
            <button className="btn btn-danger">Reset</button>
          </form>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="note/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-boarded">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>category</td>
                <td>Note Name</td>
                <td>Note</td>
                <td>Date</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {noteData &&
                noteData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                    <td>{item.noteName}</td>
                    <td>{item.note}</td>
                    <td>{item.date}</td>
                    <td>
                      <a
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          removeFunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Notelist;

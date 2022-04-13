import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const users = useSelector((state) => state.admin);

  return (
    <>
      <div className="AdminListUser">
        <h3 className="title is-3">User List</h3>
        <hr />
        {users.map((user, id) => {
          return (
            <Link to={`/admin/usercard/${user.id}`}>
              <div key={user.id}>
                <a className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                  {`${user.name} ${user.surname}`}
                </a>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default AdminUsers;

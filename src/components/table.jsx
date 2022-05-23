import React from "react";

const Table = ({ users, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>
              {user.qualities.map((quality) => (
                <span
                  className={`badge m-1 bg-${quality.color}`}
                  key={quality._id}
                >
                  {quality.name}
                </span>
              ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>{user.bookmark}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(user._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

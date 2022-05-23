import React, { useState } from "react";
import api from "../api";
import Table from "./table";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const getPhraseClasses = () => {
    let classes = "badge rounded-pill bg m-2 ";
    classes += users.length === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  const changePhrase = () => {
    if (users.length === 1) {
      return `${users.length} человек тусанет с тобой сегодня`;
    } else if (users.length === 2 || users.length === 3 || users.length === 4) {
      return `${users.length} человека тусанут с тобой сегодня`;
    } else {
      return `${users.length} человек тусанут с тобой сегодня`;
    }
  };

  const renderPhrase = (number) => {
    return users.length !== 0 ? (
      <div>
        <h1>
          <span className={getPhraseClasses()}>{changePhrase()}</span>
        </h1>
        <Table users={users} onDelete={handleDelete} />
      </div>
    ) : (
      <h1>
        <span className={getPhraseClasses()}>{"Никто с тобой не тусанет"}</span>
      </h1>
    );
  };

  return renderPhrase();
};
export default Users;

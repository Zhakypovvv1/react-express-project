import React from 'react';
import s from './Item.module.scss';
import Edit from '../../../features/Edit/ui/Edit/Edit';

const Item = ({ _id, status, title, handleDelete, handleEditTask }) => {
  const statusStyles = status ? s.completed : s.processing;
  const statusText = status ? 'Completed' : 'Processing';

  const editConfig = {
    title,
    status,
  };


  return (
    <div className="col">
      <div className={s.box}>
        <p>
          title: <span className={s.name}>{title}</span>
        </p>
        <p>
          status: <span className={statusStyles}>{statusText}</span>
        </p>
        <button onClick={() => handleDelete(_id)}>Delete</button>
        <Edit
          type="edit"
          editConfig={editConfig}
          id={_id}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
};

export default Item;

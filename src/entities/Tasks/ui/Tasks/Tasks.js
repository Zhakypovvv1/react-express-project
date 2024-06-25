import React, { useEffect } from 'react';
import { fetchTasksThunk } from '../../../../shared/slicer/tasks/getTasksSlice';
import { useDispatch } from 'react-redux';
import Item from '../../../../shared/ui/Item/Item';
import { deleteTaskThunk } from '../../../../shared/slicer/tasks/deleteTaskSlice';
import { editTaskThunk } from '../../../../shared/slicer/tasks/editTaskSlice';

const Tasks = ({ items, page }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksThunk({ page, pageSize: 8 }));
  }, [dispatch, page]);

  console.log(items);

  const handleDelete = _id => {
    dispatch(fetchTasksThunk({ page: 1, pageSize: 8 }));
    dispatch(deleteTaskThunk(_id));
  };

  const handleEditTask = (id, formData) => {
    dispatch(fetchTasksThunk({ page: 1, pageSize: 8 }));
    dispatch(editTaskThunk({id, formData}));
  };

  const renderItems = items.map(el => (
    <Item
      key={el._id}
      {...el}
      handleDelete={handleDelete}
      handleEditTask={handleEditTask}
    />
  ));

  return (
    <div className="row gy-5 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
      {renderItems}
    </div>
  );
};

export default Tasks;

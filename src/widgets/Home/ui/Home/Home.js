import { Layout } from 'antd';
import React from 'react';
import ShareForm from '../../../../shared/ui/shareForm/shareForm';
import Pagination from '../../../../shared/ui/Pagination/Pagination';
import Tasks from '../../../../entities/Tasks/ui/Tasks/Tasks';
import { useDispatch, useSelector } from 'react-redux';
import useFilterSearchParams from '../../../../shared/hooks/useFilterSearchParams';
import { addTaskThunk } from '../../../../shared/slicer/tasks/addTaskSlice';
import { formConfig } from '../../../../shared/config/formConfig';
import { fetchTasksThunk } from '../../../../shared/slicer/tasks/getTasksSlice';

const Home = () => {
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);

  const { page, updateSearchParams } = useFilterSearchParams();

  const dispatch = useDispatch();
  const handleSubmit = async formData => {
    dispatch(addTaskThunk(formData)).then(() => {
      dispatch(fetchTasksThunk({ page: 1, pageSize: 8 }));
      updateSearchParams({ page: 1 }, value => value !== 1);
    });
  };

  const handlePageChange = e => {
    updateSearchParams({ page: e.selected + 1 }, value => value !== 1);
  };

  return (
    <Layout>
      <ShareForm
        handleSubmit={handleSubmit}
        config={formConfig}
        type="create"
      />
      <Pagination
        currentPage={page}
        onChangePage={handlePageChange}
        pageCount={tasks.pages}
      />
      <Tasks page={page} items={tasks.items} />
    </Layout>
  );
};

export default Home;

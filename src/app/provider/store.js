import { configureStore } from '@reduxjs/toolkit';
import getTasksSlice from '../../shared/slicer/tasks/getTasksSlice';
import tokenSlicer from '../../shared/slicer/token/tokenSlicer';
import registerSlicer from '../../shared/slicer/auth/registerSlicer';
import authSlicer from '../../shared/slicer/auth/authSlicer';
import addTaskSlice from '../../shared/slicer/tasks/addTaskSlice';
import editTaskSlice from '../../shared/slicer/tasks/editTaskSlice';
import deleteTaskSlice from '../../shared/slicer/tasks/deleteTaskSlice';

const store = configureStore({
  reducer: {
    tasks: getTasksSlice,
    getToken: tokenSlicer,
    register: registerSlicer,
    auth: authSlicer,
    addTask: addTaskSlice,
    editTask: editTaskSlice,
    deleteTask: deleteTaskSlice,
  },
});
export default store;

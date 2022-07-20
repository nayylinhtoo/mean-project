export const environment = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  USER_BASE_URL: 'http://localhost:3000/users/',
  USER: {
    GET_ALL_USERS: 'list',
    GET_USER_DETAIL: 'view?userId=',
    ADD_USER_DETAIL: 'add',
    UPDATE_USER_DETAIL: 'update',
    DELETE_USER_DETAIL: 'delete'
  }
};

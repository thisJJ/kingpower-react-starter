import UserManagerView from './user-manager/views/UserManagerView'
import UserAddView from './user-manager/views/UserAddView'
import UserEditView from './user-manager/views/UserEditView'
import UserListView from './user-manager/views/UserListView'


export default [
  {
    path: '/',
    component: UserManagerView,
    routes: [
      {
        path: '/user-manager/list',
        component: UserListView
      },
      {
        path: '/user-manager/add',
        component: UserAddView
      },
      {
        path: '/user-manager/edit/:key',
        component: UserEditView
      }
    ]
  }
]

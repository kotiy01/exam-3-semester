import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage'
import TaskPage from '../pages/TaskPage'

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
           path: '/',
           name: 'main',
           component: MainPage
        },
        {
            path: '/task/:id',
            name: 'task',
            component: TaskPage
        }
    ]
})
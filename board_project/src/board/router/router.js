import Vue from 'vue'
import Router from 'vue-router'
import BoardMain from '@/board/components/BoardMain'
import BoardList from '@/board/components/list/BoardList'
import BoardView from '@/board/components/view/BoardView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BoardMain
    },
    {
      path: '/board/:type/:mode',
      component: BoardMain,
      props: true
    },
    {
      path: '/board/:type/:mode/2',
      component: BoardMain,
      props: true,
      children: [
        {
          path: 'test',
          components: {
            'list': BoardList,
            view: BoardView
          }
        }
      ]
    }
  ]
})

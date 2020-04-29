import Index from '../views/Index'
import FirstIndex from '../views/FirstIndex'
import TheatreList from '../views/TheatreList'
import Eticket from '../views/Eticket'
import Myjuooo from '../views/Myjuooo'

import ActivityGroup from '../views/noNav/ActivityGroup'
import CardproductCardhappy from '../views/noNav/CardproductCardhappy'
import CardproductIndex from '../views/noNav/CardproductIndex'
import Passport from '../views/noNav/Passport'
import PlusIndex from '../views/noNav/PlusIndex'
import PointsMall from '../views/noNav/PointsMall'
import Search from '../views/noNav/Search'
import ShowList from '../views/noNav/ShowList'
import TheaterDetail from '../views/noNav/TheaterDetail'
import TicketDetail from '../views/noNav/TicketDetail'
import TouringList from '../views/noNav/TouringList'
import TourShowinfo from '../views/noNav/TourShowInfo'
import VipIndex from '../views/noNav/VipIndex'

export default [
    {
        path: '/activity/group',
        component: ActivityGroup,
    },
    {
        path: '/Cardproduct/cardhappy',
        component: CardproductCardhappy,
    },
    {
        path: '/Cardproduct/index',
        component: CardproductIndex,
    },
    {
        path: '/passport/login',
        component: Passport,
    },
    {
        path: '/plus/index',
        component: PlusIndex,
    },
    {
        path: '/points/mall',
        component: PointsMall,
    },
    {
        path: '/search/index',
        component: Search,
    },
    {
        path: '/show/showsLibrary',
        component: ShowList,
    },
    {
        path: '/theater/detail',
        component: TheaterDetail,
    },
    {
        path: '/ticket',
        component: TicketDetail,
    },
    {
        path: '/touring',
        component: TouringList,
    },
    {
        path: '/tour/tourShowInfo',
        component: TourShowinfo,
    },
    {
        path: '/vip/index',
        component: VipIndex,
    },
    {
        path: '/',
        component: Index,
        childrens: [
            {
                path: '/',
                component: FirstIndex,
                exact:true,
            },
            {
                path: '/theatre/theatreList',
                component: TheatreList,
            },
            {
                path: '/eticket/list',
                component: Eticket,
            },
            {
                path: '/myjuooo/myjuooo',
                component: Myjuooo,
            },
        ]
    },









]

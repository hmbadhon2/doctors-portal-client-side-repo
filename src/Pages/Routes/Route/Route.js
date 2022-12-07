import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../../Layout/DashboardLayout';
import Main from '../../../Layout/Main';
import Appointment from '../../Appointment/Appointment';
import AddDoctor from '../../Dashboard/AddDoctor/AddDoctor';
import AllUser from '../../Dashboard/AllUser';
import Alluser2 from '../../Dashboard/Alluser2';
import Dashboard from '../../Dashboard/Dashboard';
import ManageDoctors from '../../Dashboard/ManageDoctors';
import MyAppointment2 from '../../Dashboard/MyAppointment2';
import MyAppointments from '../../Dashboard/MyAppointments';
import Payment from '../../Dashboard/Payment/Payment';
import Home from '../../Home/Home/Home';
import Login from '../../Login/Login';
import Register from '../../Login/Register.';
import Review from '../../Review/Review';
import DisplayError from '../../Shared/DisplayError/DisplayError';
import AdminRoutes from '../AdminRoutes/AdminRoutes';
import AdminRouts2 from '../AdminRoutes/AdminRouts2';
import Private from '../Private/Private';


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/reviews',
                element:<Private><Review></Review></Private>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Private><DashboardLayout></DashboardLayout></Private>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            // {
            //     path:'/dashboard',
            //     element:<MyAppointments></MyAppointments>
            // },
            {
                path:'/dashboard/myAppointment2',
                element:<MyAppointment2></MyAppointment2>
            },
            {
                path:'/dashboard/allUser',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },
            {
                path:'/dashboard/allUser2',
                element:<AdminRouts2><Alluser2></Alluser2></AdminRouts2>
            },
            {
                path:'/dashboard/adddoctor',
                element:<AdminRouts2><AddDoctor></AddDoctor></AdminRouts2>
            },
            {
                path:'/dashboard/managedoctor',
                element:<AdminRouts2><ManageDoctors></ManageDoctors></AdminRouts2>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRouts2><Payment></Payment></AdminRouts2>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])


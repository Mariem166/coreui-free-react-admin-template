import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  

  {
    component: CNavGroup,
    name: 'questions',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Allquestions',
        to: '/questions/Allquestions',
      },
      {
        component: CNavItem,
        name: 'AddNewQuestion',
        to: '/questions/AddNewQuestion',
      },
      {
        component: CNavItem,
        name: 'Deletequestion',
        to: '/questions/Deletequestion',
      },
      {
        component: CNavGroup,
        name: 'Pages',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Login',
            to: '/login',
          },
          {
            component: CNavItem,
            name: 'Register',
            to: '/register',
          },
          {
            component: CNavItem,
            name: 'Users',
            to: '/Users'
          },
         
          {
            component: CNavItem,
            name: ' User',
            to: '/User',
          },
        ],
      },
    ],
    
    
      
  },

]
export default _nav ;
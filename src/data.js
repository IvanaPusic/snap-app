import bell from './assets/bell.svg';
import calendar from './assets/calendar.svg';
import planning from './assets/planning.svg';
import todo from './assets/todo.svg';
import up from './assets/up.svg';

export const links = [
  {
    id: 1,
    link: 'Features',
    img: up,
    subLinks: [
      {
        id:1,
        img: todo,
        link: 'Todo List'
      },
      {
        id:2,
        img: calendar,
        link: 'Calendar'
      },
      {
        id:3,
        img: bell,
        link: 'Reminder'
      },
      {
        id:4,
        img: planning,
        link: 'Planning'
      },
    ]
  },
  {
    id:2, 
    link: 'Company',
    img: up,
    subLinks:[
      {
        id:1,
        link: 'History',
      },
      {
        id:2,
        link: 'Our Team',
      },
      {
        id:3,
        link: 'Blog',
      },
    ],
  },
  {
    id: 3,
    link: 'Careers',
  },
  {
    id: 4,
    link: 'About',
  },
]
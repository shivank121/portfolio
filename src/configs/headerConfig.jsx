import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MemoryIcon from '@mui/icons-material/Memory';
import FeedbackIcon from '@mui/icons-material/Feedback';

export const headerMenuBar = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    id: 'about',
    name: 'About',
    path: '/about',
    icon: <InfoIcon />,
  },
  {
    id: 'tech',
    name: 'Technologies',
    path: '/technologies',
    icon: <MemoryIcon />,
  },
  {
    id: 'experience',
    name: 'Experience',
    path: '/experience',
    icon: <WorkIcon />,
  },
  {
    id: 'feedback',
    name: 'Feedbacks',
    path: '/feedbacks',
    icon: <FeedbackIcon />,
  },
  {
    id: 'contact',
    name: 'Contact',
    path: '/contact',
    icon: <ContactMailIcon />,
  },
];

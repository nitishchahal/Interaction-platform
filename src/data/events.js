import event1Image from './images/event1.jpg'; // Assuming event1.jpg exists
import event2Image from './images/event2.jpg'; // Assuming event2.jpg exists
import event3Image from './images/event3.jpg';
import event4Image from './images/event4.jpg';

const events = [
  {
    id: 1,
    title: 'Annual Alumni Gala',
    date: '2025-10-15',
    location: 'Grand Ballroom, Campus Center',
    image: event1Image,
    description: 'Join us for a night of celebration and networking. Connect with fellow alumni, faculty, and industry leaders.',
  },
  {
    id: 2,
    title: 'Career Mentorship Workshop',
    date: '2025-11-05',
    location: 'Online via Zoom',
    image: event2Image,
    description: 'Learn from seasoned professionals. This workshop will cover resume building, interview skills, and career pathing.',
  },
  {
    id: 3,
    title: 'Startup Pitch Competition',
    date: '2025-11-20',
    location: 'Innovation Hub',
    image: event3Image,
    description: 'Watch the next generation of entrepreneurs pitch their ideas to a panel of expert judges. Network with investors and founders.',
  },
  {
    id: 4,
    title: 'Alumni Soccer Tournament',
    date: '2025-12-01',
    location: 'University Sports Field',
    image: event4Image,
    description: 'Bring your team and compete for the annual Alumni Cup! A fun day of sports and friendly competition.',
  },
];

export default events;
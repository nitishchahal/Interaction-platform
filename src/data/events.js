// src/data/events.js

import event1Image from './images/event1.jpg';
import event2Image from './images/event2.jpg';
import event3Image from './images/event3.jpg';
import event4Image from './images/event4.jpg';

// Import the alumni data
import alumni from './alumni';

// Helper function to find an alumni member by their name and format the guest object
const getAlumniGuest = (name) => {
  const alumniMember = alumni.find(a => a.name === name);
  if (alumniMember) {
    return {
      name: alumniMember.name,
      title: `${alumniMember.profession}, ${alumniMember.company}`,
      photo: alumniMember.profileImage,
    };
  }
  // Return a fallback if the alumni member isn't found
  return {
    name: name,
    title: 'Guest Speaker',
    photo: 'https://via.placeholder.com/150/CCCCCC/808080?text=N/A' 
  };
};

const events = [
  {
    id: 1,
    title: 'Innovate Tech Summit 2025',
    image: event1Image,
    description: 'Join us for a two-day conference exploring the future of artificial intelligence and machine learning. Network with industry leaders and get hands-on experience with the latest technologies.',
    date: 'October 25-26, 2025',
    time: '9:00 AM - 5:00 PM IST',
    venue: {
      name: 'Bangalore International Exhibition Centre',
      address: '10th Mile, Tumkur Road, Bangalore, India',
      mapsLink: 'https://maps.google.com/?q=Bangalore%20International%20Exhibition%20Centre'
    },
    guests: [
      getAlumniGuest('Amit Sharma'), 
      getAlumniGuest('Priya Singh')
    ],
    activities: [
      {
        title: 'Keynote: The Future of Generative AI',
        time: '10:00 AM - 11:00 AM',
        description: 'A deep dive into the latest advancements and ethical considerations of generative AI.'
      },
      {
        title: 'Workshop: Building Your First AI Model',
        time: '11:30 AM - 1:00 PM',
        description: 'A hands-on session for beginners to create and deploy a simple machine learning model.'
      },
      {
        title: 'Panel Discussion: AI in Healthcare',
        time: '2:30 PM - 3:30 PM',
        description: 'Leading experts discuss how AI is revolutionizing medical diagnosis and patient care.'
      }
    ],
    organizers: [
      {
        name: 'Innovate Global',
        logo: 'https://via.placeholder.com/64/4c1d95/ffffff?text=IG',
        website: 'https://innovate-global.com'
      },
      {
        name: 'CodeMasters Community',
        logo: 'https://via.placeholder.com/64/0f766e/ffffff?text=CM',
        website: 'https://codemasters.org'
      }
    ],
    participants: ['Developers', 'Data Scientists', 'Entrepreneurs', 'Students']
  },
  {
    id: 2,
    title: 'Cybersecurity Nexus 2025',
    image: event2Image,
    description: 'An immersive workshop focused on defending against modern cyber threats. Learn practical skills from leading security engineers and ethical hackers.',
    date: 'November 5, 2025',
    time: '10:00 AM - 4:00 PM PST',
    venue: {
      name: 'Innovation Hub Auditorium',
      address: '456 Tech Street, San Francisco, CA',
      mapsLink: 'https://maps.google.com/?q=Innovation%20Hub%20Auditorium'
    },
    guests: [
      getAlumniGuest('Suresh Babu')
    ],
    activities: [
      {
        title: 'Interactive Session: Phishing Defense',
        time: '10:30 AM - 12:00 PM',
        description: 'A live simulation and training on how to identify and prevent sophisticated phishing attacks.'
      },
      {
        title: 'Ethical Hacking Demo',
        time: '1:00 PM - 2:30 PM',
        description: 'Watch an expert demonstrate common hacking techniques and how to build defenses against them.'
      },
      {
        title: 'Q&A with Security Experts',
        time: '3:00 PM - 4:00 PM',
        description: 'An open forum to ask your most pressing cybersecurity questions.'
      }
    ],
    organizers: [
      {
        name: 'Nexus Security Solutions',
        logo: 'https://via.placeholder.com/64/5a67d8/ffffff?text=NS',
        website: 'https://nexussec.com'
      }
    ],
    participants: ['IT Professionals', 'Security Analysts', 'Students', 'Anyone interested in cybersecurity']
  },
  {
    id: 3,
    title: 'Future Founders Pitch-Fest',
    image: event3Image,
    description: 'Watch the next generation of entrepreneurs pitch their ideas to a panel of expert judges. Network with investors and founders.',
    date: 'November 20, 2025',
    time: '2:00 PM - 6:00 PM GMT',
    venue: {
      name: 'The Foundry Co-working Space',
      address: '789 Startup Alley, London, UK',
      mapsLink: 'https://maps.google.com/?q=The%20Foundry%20Co-working%20Space'
    },
    guests: [
      getAlumniGuest('Emily Johnson'),
      getAlumniGuest('Ananya Iyer')
    ],
    activities: [
      {
        title: 'Startup Pitches (Round 1)',
        time: '2:30 PM - 3:30 PM',
        description: 'The first cohort of founders presents their innovative business ideas.'
      },
      {
        title: 'Networking & Refreshments',
        time: '3:30 PM - 4:00 PM',
        description: 'An opportunity to connect with founders, investors, and fellow attendees.'
      },
      {
        title: 'Startup Pitches (Final Round)',
        time: '4:00 PM - 5:00 PM',
        description: 'The finalists compete for the top prize and investment opportunities.'
      },
      {
        title: 'Awards Ceremony',
        time: '5:30 PM - 6:00 PM',
        description: 'The judges announce the winner and runners-up of the competition.'
      }
    ],
    organizers: [
      {
        name: 'The Founder\'s Guild',
        logo: 'https://via.placeholder.com/64/808080/FFFFFF?text=FG',
        website: 'https://foundersguild.org'
      }
    ],
    participants: ['Founders', 'Investors', 'Students', 'Business professionals']
  },
  {
    id: 4,
    title: 'Code Hackathon 2025',
    image: event4Image,
    description: 'A 24-hour coding marathon where teams will build and present innovative solutions to real-world problems. Get ready for a night of coding, caffeine, and collaboration.',
    date: 'December 1-2, 2025',
    time: '8:00 AM Day 1 to 8:00 AM Day 2',
    venue: {
      name: 'University Computer Lab',
      address: '101 Campus Drive, University Town, USA',
      mapsLink: 'https://maps.google.com/?q=University%20Computer%20Lab'
    },
    guests: [
      getAlumniGuest('Harshita Rao'),
      getAlumniGuest('Olivia Brown')
    ],
    activities: [
      {
        title: 'Opening Ceremony & Team Formation',
        time: '8:00 AM - 9:00 AM',
        description: 'The event kicks off with a welcome and challenge brief, followed by team introductions.'
      },
      {
        title: 'Coding Marathon',
        time: '9:00 AM Day 1 - 7:00 AM Day 2',
        description: 'Teams will build their projects, with mentors available to provide guidance.'
      },
      {
        title: 'Project Submission & Demos',
        time: '7:00 AM - 8:00 AM Day 2',
        description: 'Teams submit their projects and present their final solutions to the judges.'
      },
      {
        title: 'Awards & Closing',
        time: '8:00 AM - 9:00 AM Day 2',
        description: 'Winners are announced and prizes are awarded.'
      }
    ],
    organizers: [
      {
        name: 'DevCircle',
        logo: 'https://via.placeholder.com/64/333333/FFFFFF?text=DC',
        website: 'https://devcircle.io'
      },
      {
        name: 'University Tech Club',
        logo: 'https://via.placeholder.com/64/FFFF00/000000?text=UTC',
        website: 'https://utechclub.edu'
      }
    ],
    participants: ['Coders', 'Designers', 'Project Managers', 'Students']
  }
];

export default events;
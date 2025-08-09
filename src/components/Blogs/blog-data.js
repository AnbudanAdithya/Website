import React from "react";
import PurposeofWebsite from "./content/PurposeofWebsite";
// Import other blog posts here...

import Purpose from "../../Assets/Blogs/Purpose.png";
import Raksha_Bandhan from "../../Assets/Blogs/Raksha_Bandhan.png";

export const blogData = [
  {
    slug: "Purpose behind this website",
    title: "Why do you need your own website?",
    description:
      "My opinions as to why I created this website and why every corporate professional (or who is going to enter it) should have their own website.",
    thumbnail: Purpose,
    isExternal: false,
    date: "August 05, 2025",
    component: <PurposeofWebsite />,
  },

 {
    slug: "Raksha Bandhan - A Thread that ties more than just wrists",
    title: "Happy Raksha Bandhan!",
    description:"Raksha Bandhan - A day when you strengthen the bond with your sibling with a life long commitment to stand for, by and with each other through ups and downs of life.",
    thumbnail: Raksha_Bandhan,
    date: "August 09, 2025",
    isExternal: true,
    link: "https://open.substack.com/pub/adithya05/p/raksha-bandhan-a-thread-that-ties?r=69wbpv&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
},

  // Add other blog post objects here...
];

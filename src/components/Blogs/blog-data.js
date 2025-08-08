import React from "react";
import PurposeofWebsite from "./content/PurposeofWebsite";
//import RakshaBandhan from "./content/RakshaBandhan";
// Import other blog posts here...

import Purpose from "../../Assets/Blogs/Purpose.png";
//import Raksha_Bandhan from "../../Assets/Blogs/Raksha_Bandhan.png";

export const blogData = [
  {
    slug: "Purpose behind this website",
    title: "Why do you need your own website?",
    description:
      "My opinions as to why I created this website and why every corporate professional (or who is going to enter it) should have their own website.",
    thumbnail: Purpose,
    date: "August 05, 2025",
    component: <PurposeofWebsite />,
  },

  // Add other blog post objects here...
];

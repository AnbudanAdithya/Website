import React from "react";
import FirstBlogPost from "./content/FirstBlogPost";
// Import other blog posts here...

import chatbotThumbnail from "../../Assets/Blogs/chatify.png";

export const blogData = [
  {
    slug: "chatbots-and-customer-service",
    title: "The Rise of Chatbots in Customer Service",
    description: "An in-depth look at how AI-powered chatbots are revolutionizing the customer service industry.",
    thumbnail: chatbotThumbnail,
    date: "July 25, 2025",
    component: <FirstBlogPost />,
  },
  // Add other blog post objects here...
];
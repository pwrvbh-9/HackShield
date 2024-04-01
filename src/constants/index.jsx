import { FileLock  } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { EarthLock } from "lucide-react";
import { Waypoints } from "lucide-react";
import { ShieldCheck } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Why Choose Us", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "David Miller",
    company: "Stellar Solutions",
    image: user1,
    text: "We switched to HackShield after a data breach, and the difference is night and day. Their quick threat detection prevented further damage, and their support team helped us restore our systems quickly. We finally feel secure.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "As a small business owner, I don't have the resources for a dedicated IT team. HackShield gives me the peace of mind knowing my website is constantly monitored for malware. Their instant removal service saved us a lot of trouble.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Our website is the backbone of our business. When it got hacked, we were devastated. But HackShield came to the rescue. They restored our website within hours, minimizing downtime and saving us from a major financial loss.",
  },
  {
    user: " Michael Garcia",
    company: "SkyNet Technologies",
    image: user4,
    text: "Keeping hackers away is a top priority for us. HackShield provides us with a comprehensive security solution that gives us complete confidence. Their proactive approach and advanced technology make them the perfect partner for our online security needs.",
  },
  {
    user: "Michael Wilson",
    company: "Miller's Crafts",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results. I highly recommend HackShield to anyone looking for reliable and trustworthy security services.",
  },
  {
    user: " Maria Hernandez",
    company: "CloudSoft Inc",
    image: user6,
    text: "I highly recommend HackShield to anyone looking for reliable and trustworthy security services. Their team is knowledgeable, helpful, and always goes the extra mile to ensure our data is safe. They make security easy to understand and manage.",
  },
];

export const services = [
  {
    icon: <FileLock  />,
    text: "Cyber Security",
    description:
      "With organizations relying more and more on Cybersecurity to protect an unprecedented amount of big data including sensitive information, cyber attacks  and getting more sophisticated.",
  },
  {
    icon: <LockKeyholeOpen />,
    text: "Vulnerability Assessment",
    description:
      "Protecting sensitive data of a company requires an in-depth inspection of that company's infrastructure, Security Architecture and Design deals with such kinds of services ",
  },
  {
    icon: <GlobeLock />,
    text: "Networking and Security",
    description:
      "An effective and result driven CyberSecurity plan involves intricacies and methodologies across all cyber elements such as endpoint security, network security, end-user security.",
  },
  {
    icon: <Waypoints />,
    text: "Backup and Recovery",
    description:
      "We offer Managed Security services for SMEs who do not have in-house expertise and cannot afford to buy tools to ensure the safety of thier systems, but want to know thier security posture round the clock.",
  },
  {
    icon: <EarthLock />,
    text: "Website Security",
    description:
      "Commitement to a data protection framework requires expertise and skillset of Cybersecurity professionals. Our team of virtual CISOs and DPOs conform to this role extremely well.",
  },
  {
    icon: <ShieldCheck />,
    text: "Hacking Protection",
    description:
      "Regular security assessments are crucial to examine the security posture of a company and see if there's an exploitable vulneribility n the Cybersecurity measures.",
  },
];

export const checklistItems = [
  {
    title: "Quick Threat Detection",
    description:
      "Don't wait for disaster. We spot cyber threats before they strike.",
  },
  {
    title: "Instant Malware Removal",
    description:
      "Instant removal, total protection - keep your systems healthy.",
  },
  {
    title: "Restore Hacked Website",
    description:
      "Worry-free restoration, minimize downtime, regain control.",
  },
  {
    title: "Keep Hackers Away",
    description:
      "Our fortress keeps intruders out, your data stays protected.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Daily malware scanning ",
      "Basic website monitoring",
      "Community support forum",
      "Troubleshooting basic issues",
    ],
  },
  {
    title: "Pro",
    price: "$99",
    features: [
      "All features of the Free Plan",
      "Advanced malware detection",
      "Web Application Firewall (Advanced)",
      "24/7 email support",
    ],
  },
  {
    title: "Premium",
    price: "$199",
    features: [
      "All features of the Pro Plan",
      "Priority 24/7 phone support",
      "Regular security vulnerability assessments",
      "Automatic website backups",
    ],
  },
];

export const platformLinks = [
  { href: "#", text: "Software Development" },
  { href: "#", text: "Web Development" },
  { href: "#", text: "Community Meetups" },
  { href: "#", text: "Cloud & DevOps" },
  { href: "#", text: "Product Design" },
];

export const communityLinks  = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Terms of Services" },
  { href: "#", text: "White Papers" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Release Notes" },
];

export const resourcesLinks = [
  { href: "#", text: "Cyber Security" },
  { href: "#", text: "Cloud Computing" },
  { href: "#", text: "Application Security" },
  { href: "#", text: "Infrastrucutre Security" },
  { href: "#", text: "Blogs and News" },
];

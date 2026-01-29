export type Tutor = {
  id: string;
  name: string;
  headline: string;
  subjects: string[];
  rating: number;
  reviewsCount: number;
  pricePerHour: number;
  location: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  goal: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  interests: string[];
};

export const categories = [
  "Programming",
  "Design",
  "Math",
  "Science",
  "Languages",
  "Business",
];

export const tutors: Tutor[] = [
  {
    id: "t-101",
    name: "Ayesha Rahman",
    headline: "Full‑Stack Mentor • React/Next.js • Interview Prep",
    subjects: ["React", "Next.js", "TypeScript"],
    rating: 4.9,
    reviewsCount: 128,
    pricePerHour: 25,
    location: "Remote",
  },
  {
    id: "t-102",
    name: "Mahmud Hasan",
    headline: "Math Tutor • Algebra to Calculus • Clear explanations",
    subjects: ["Algebra", "Calculus", "SAT Math"],
    rating: 4.8,
    reviewsCount: 76,
    pricePerHour: 18,
    location: "Dhaka / Remote",
  },
  {
    id: "t-103",
    name: "Nusrat Jahan",
    headline: "English Coach • IELTS Speaking • Confidence building",
    subjects: ["IELTS", "Spoken English", "Writing"],
    rating: 4.7,
    reviewsCount: 54,
    pricePerHour: 20,
    location: "Remote",
  },
];

export const testimonials = [
  {
    name: "Nabila S.",
    role: "Student",
    quote:
      "I booked a session in minutes. The tutor explained everything clearly and I finally felt confident.",
  },
  {
    name: "Rafiq H.",
    role: "Tutor",
    quote:
      "Setting availability is simple, and students find me based on my subjects and ratings. Great workflow.",
  },
  {
    name: "Platform Admin",
    role: "Admin",
    quote:
      "Managing users and categories is straightforward. The dashboard keeps moderation organized.",
  },
];

export const students: Student[] = [
  {
    id: "st-201",
    name: "Demo Student",
    email: "student@demo.com",
    goal: "Become job-ready in Next.js and TypeScript",
    level: "Intermediate",
    interests: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "st-202",
    name: "Student #2",
    email: "student2@demo.com",
    goal: "Improve problem solving for interviews",
    level: "Beginner",
    interests: ["DSA", "JavaScript", "Math"],
  },
];

export const studentBookings = [
  {
    id: "b-1",
    tutorId: "t-101",
    tutorName: "Ayesha Rahman",
    subject: "Next.js",
    date: "2026-02-02",
    time: "7:00 PM",
    status: "Upcoming",
  },
  {
    id: "b-2",
    tutorId: "t-102",
    tutorName: "Mahmud Hasan",
    subject: "Calculus",
    date: "2026-01-10",
    time: "9:00 PM",
    status: "Completed",
  },
];

export const adminUsers = [
  { id: "u-1", name: "Saad Srabon", role: "student", status: "active" },
  { id: "u-2", name: "Ayesha Rahman", role: "tutor", status: "active" },
  { id: "u-3", name: "John Admin", role: "admin", status: "active" },
] as const;

export const analytics = {
  student: {
    bookingsLast8Weeks: [1, 0, 2, 1, 3, 2, 3, 4],
    reviewStars: [
      { label: "5★", value: 8 },
      { label: "4★", value: 3 },
      { label: "3★", value: 1 },
      { label: "2★", value: 0 },
      { label: "1★", value: 0 },
    ],
    addresses: [
      { label: "Dhaka", value: 6 },
      { label: "Chattogram", value: 2 },
      { label: "Sylhet", value: 1 },
      { label: "Remote", value: 3 },
    ],
  },
  admin: {
    bookingsLast12Months: [
      { label: "Feb", value: 12 },
      { label: "Mar", value: 14 },
      { label: "Apr", value: 18 },
      { label: "May", value: 20 },
      { label: "Jun", value: 16 },
      { label: "Jul", value: 22 },
      { label: "Aug", value: 25 },
      { label: "Sep", value: 28 },
      { label: "Oct", value: 26 },
      { label: "Nov", value: 30 },
      { label: "Dec", value: 33 },
      { label: "Jan", value: 29 },
    ],
    userSplit: [
      { label: "Students", value: 84, color: "rgba(252,127,3,0.9)" },
      { label: "Tutors", value: 34, color: "rgba(255,255,255,0.5)" },
      { label: "Admins", value: 6, color: "rgba(255,255,255,0.25)" },
    ],
    bookingsByCity: [
      { label: "Dhaka", value: 48 },
      { label: "Chattogram", value: 18 },
      { label: "Sylhet", value: 9 },
      { label: "Rajshahi", value: 7 },
      { label: "Remote", value: 28 },
    ],
  },
} as const;

# Learn Edmore

A Next.js educational platform with form-driven user submission system for student registrations, tutor applications, partnership inquiries, job applications, and contact requests.

## Features

- **Student Registration** — Multi-step signup form for parents enrolling learners
- **Tutor Application** — Prospective tutors can apply with qualifications and subject preferences
- **Partnership Inquiry** — Schools and organizations can submit partnership requests
- **Job Application** — Career seekers can apply for open positions
- **Contact Form** — General inquiries and messages
- **Login** — Sign-in page 

All forms submit to a single API endpoint that forwards submissions via email.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Nodemailer (Gmail SMTP)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


## Project Structure

```
app/
├── api/send-email/route.ts   — Email API endpoint
├── become-a-tutor/           — Tutor application page
├── careers/                  — Job application page
├── contact/                  — Contact page
├── get-started/              — Student registration page
├── login/                    — Login page
├── partnerships/             — Partnership inquiry page
├── privacy/                  — Privacy policy
└── terms/                    — Terms of service
components/                   — Reusable UI components (Navbar, MobileNav, Footer, etc.)
public/                       — Static assets
```

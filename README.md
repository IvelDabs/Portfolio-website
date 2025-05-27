## Project Structure

The project is structured as follows:

```
portfolio-website
├── src
│   ├── components
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Calendar.tsx
│   │   └── common
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Form.tsx
│   │       └── Notification.tsx
│   ├── sections
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── FooterSection.tsx
│   ├── hooks
│   │   └── useForm.ts
│   ├── utils
│   │   ├── animations.ts
│   │   └── validation.ts
│   ├── types
│   │   └── index.ts
│   ├── styles
│   │   └── globals.css
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Technologies Used

- **React.js**: For building the user interface.
- **TypeScript**: For type safety and maintainability.
- **Tailwind CSS**: For styling and responsive design.
- **Framer Motion**: For animations and transitions.
- **React Hook Form**: For form handling and validation.
- **EmailJS/Formspree**: For sending form submissions to email.
- **React Router**: For routing (if needed).

## Features

- Animated hero section with an introduction and call-to-action.
- Skills section displaying frontend and backend technologies.
- Services section outlining the professional services offered.
- Projects section showcasing various projects with hover effects.
- Contact section with a form for inquiries and scheduling meetings.
- Footer with social media links and copyright information.

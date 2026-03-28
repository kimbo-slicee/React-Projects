```
src/
├─ assets/             # Images, icons, fonts
├─ components/         # Reusable components (buttons, inputs, cards)
│   ├─ Button.jsx
│   ├─ Input.jsx
│   └─ ...
├─ layouts/            # Layouts for different sections
│   ├─ DashboardLayout.jsx
│   ├─ AuthLayout.jsx       # Login, VerifyEmail
│   └─ MainLayout.jsx       # Home page, public pages
├─ pages/              # Route pages (views)
│   ├─ Home.jsx
│   ├─ Login.jsx
│   ├─ VerifyEmail.jsx
│   ├─ dashboard/          # Dashboard subpages
│   │   ├─ Projects.jsx
│   │   ├─ Tasks.jsx
│   │   └─ Settings.jsx
├─ context/            # React Context for global state
│   ├─ AuthContext.jsx
│   └─ ThemeContext.jsx
├─ hooks/              # Custom hooks
│   ├─ useAuth.js
│   └─ useFetch.js
├─ services/           # API calls / backend requests
│   ├─ authService.js
│   └─ projectService.js
├─ utils/              # Helper functions
│   └─ formatDate.js
├─ App.jsx
├─ index.jsx
└─ routes.jsx          # Optional: centralized route definitions

```

# FlowForge - Workflow Automation Platform

![FlowForge Logo](https://via.placeholder.com/150x50?text=FlowForge) <!-- Replace with actual logo -->

**Automate Your Workflows with Ease** - Cutting-edge automation solutions to streamline business processes.

## Table of Contents
- [Project Overview](#project-overview)
- [Team Members](#team-members)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)

## Project Overview

FlowForge is a workflow automation platform that helps businesses:
- Automate repetitive tasks with drag-and-drop interface
- Integrate AI for smart decision making
- Connect with popular third-party tools
- Monitor performance with analytics dashboards

**Key Features:**
- Process automation
- AI-powered workflows
<!-- - Enterprise-grade security-->
- 24/7 global support

## Team Members

| Role              | Name            | Responsibilities                      | Contact                     |
|-------------------|-----------------|---------------------------------------|-----------------------------|
| Co-Founder  | Girishom Ngoze  | Project vision, business strategy    | ngonzegirishom@gmail.com     |
| Co-Founder  | Tertius Kabugi  | Technical architecture, development  | kingkabugi@gmail.com    |
| Co-Founder  | Grace Wanjiku   | Operations, client relations         | wanjiku.grace9@gmail.com   |
| Co-Founder  | Ian Mugambi     | Product design, UX                   | kinotimoe@gmail.com   |

## Tech Stack

**Frontend:**
- HTML5, CSS3 (with Sass)
- JavaScript (ES6+)

<!-- **Backend:**
- [Node.js/Python/other]
- [Database system]
- [API framework]

**DevOps:**
- GitHub for version control
- Netlify/Vercel for hosting
- CI/CD pipeline -->

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/flowforge.git
   cd flowforge
   ```

## Project Structure

```plaintext
flowforge/
│
├── index.html          # Main HTML file for the website
├── styles.css          # CSS file with all styles and animations
├── script.js           # JavaScript file for interactivity (slider, animations, form handling)
├── images/  
└── README.md           # This file
```

# Contributing

To ensure smooth collaboration, please follow these guidelines:

### Workflow

#### Branch Naming Convention:

- **feature/[name]** - New features
- **bugfix/[name]** - Bug fixes
- **hotfix/[name]** - Critical production fixes
- **docs/[name]** - Documentation updates

#### Create a Branch
Before making changes, create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

**Example:**
```bash
git checkout -b feature/add-newsletter-functionality
```

### Pull Request Process:

1. Create PR from your feature branch to `develop`.
2. Assign at least one reviewer.
3. PR must pass all CI checks.
4. Include screenshots for UI changes.
5. Link to related issues.

### Commit Message Guidelines:

```plaintext
type(scope): brief description

[Optional longer description]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`


#### Make Changes
- Work on your feature or bug fix in your branch.
- Ensure your code follows the existing style (e.g., consistent indentation, comments where necessary).

### Stage and Commit

Stage your changes:
```bash
git add .
```

Commit with a descriptive message:
```bash
git commit -m "Add newsletter subscription functionality to footer"
```

### Push to GitHub
Push your branch to the remote repository:
```bash
git push origin feature/your-feature-name
```

### Create a Pull Request (PR)
1. Go to the repository on GitHub.
2. You’ll see a prompt to create a pull request for your branch. Click **"Compare & pull request."**
3. Add a description of your changes and tag all team members (@GirishomNgoze, @TertKabugi, @CodeGraceWanjiku, @Mugambidev) for review.
4. Submit the PR.

### Review and Merge
- At least one other team member should review the PR.
- Address any feedback by making additional commits to the same branch.
- Once approved, merge the PR into the `main` branch and delete the feature branch.

## Best Practices

- **Small Commits:** Make small, focused commits with clear messages.
- **Pull Before Pushing:** Always pull the latest changes from `main` before starting new work:
  ```bash
  git pull origin main
  ```
- **Test Changes:** Test your changes locally before pushing.
- **Avoid Conflicts:** Communicate with the team if you’re working on the same file to avoid merge conflicts.
- **File Paths:** Ensure all file paths (e.g., for images) are relative and work on GitHub Pages.

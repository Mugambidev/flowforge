# Myle Tech Solutions - Business Automation Platform

Transform Your Business with Intelligent Automation - Tailored solutions to streamline operations using Microsoft Power Platform, Dynamics 365, and Zapier.

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

Myle Tech Solutions is a business automation platform that empowers organizations across East Africa to:

- Streamline workflows with low-code automation tools
- Leverage AI for intelligent decision-making
- Integrate with third-party systems like Zapier and Thoughtly
- Gain insights through Power BI analytics dashboards

### Key Features:

- Process automation with Power Automate
- AI-powered virtual assistants via Copilot Studio
- Custom app development with Power Apps
- Comprehensive Dynamics 365 solutions
- Newsletter subscription for updates
- Real-time performance metrics (clients served, hours saved)

## Team Members

| Role | Name | Responsibilities | Contact |
|------|------|-----------------|---------|
| Co-Founder & CEO | Girishom Ngoze | Project vision, business strategy | ngonzegirishom@gmail.com |
| Co-Founder & CTO | Tertius Kabugi | Technical architecture, development | kingkabugi@gmail.com |
| Co-Founder & COO | Grace Wanjiku | Operations, client relations | wanjiku.grace9@gmail.com |
| Co-Founder & CPO | Ian Mugambi | Product design, UX | kinotimoe@gmail.com |

## Tech Stack

### Frontend:
- HTML5, CSS3 (with custom styles and animations)
- JavaScript (ES6+, for interactivity and form handling)
- Font Awesome for icons
- Google Fonts (Inter, Playfair Display)

### Tools:
- GitHub for version control
- GitHub Pages for hosting
- Visual Studio Code for development

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- Git installed locally
- A code editor (e.g., VS Code)

### Installation

Clone the repository:
```bash
git clone https://github.com/your-org/myle-tech-solutions.git
cd myle-tech-solutions
```

Open index.html in a browser to view the site locally, or use a local server:
```bash
npx live-server
```

## Project Structure

```
myle-tech-solutions/
│
├── index.html          # Main HTML file for the website
├── styles.css          # CSS file with styles and animations
├── script.js           # JavaScript for interactivity (slider, counters, forms)
├── images/             # Images for logo, team, case studies, etc.
└── README.md           # This file
```

## Contributing

To ensure smooth collaboration, please follow these guidelines:

### Workflow

#### Branch Naming Convention:
- `feature/[name]` - New features (e.g., feature/newsletter-form)
- `bugfix/[name]` - Bug fixes (e.g., bugfix/form-validation)
- `hotfix/[name]` - Critical production fixes
- `docs/[name]` - Documentation updates (e.g., docs/readme-update)

#### Create a Branch
Before making changes, create a new branch:
```bash
git checkout -b feature/your-feature-name
```

Example:
```bash
git checkout -b feature/add-newsletter-functionality
```

#### Pull Request Process:
- Create a PR from your feature branch to develop.
- Assign at least one reviewer (@GirishomNgoze, @TertKabugi, @CodeGraceWanjiku, @Mugambidev).
- Ensure PR passes all CI checks (if configured).
- Include screenshots for UI changes.
- Link to related issues in the PR description.

#### Commit Message Guidelines:
```
type(scope): brief description

[Optional longer description]
```

Types: feat, fix, docs, style, refactor, test, chore

Example:
```bash
git commit -m "feat(footer): add newsletter subscription form

- Implemented form with client-side validation
- Added mock API integration
- Styled for responsive design"
```

#### Make Changes
- Work on your feature or bug fix in your branch.
- Follow existing code style (e.g., 2-space indentation, descriptive comments).

#### Stage and Commit
Stage changes:
```bash
git add .
```

Commit with a descriptive message:
```bash
git commit -m "feat(contact): add client-side form validation"
```

#### Push to GitHub
Push your branch:
```bash
git push origin feature/your-feature-name
```

#### Create a Pull Request
- Go to the repository on GitHub.
- Click "Compare & pull request" for your branch.
- Add a detailed description and tag team members for review.
- Submit the PR.

#### Review and Merge
- At least one team member must review and approve the PR.
- Address feedback by pushing additional commits to the same branch.
- Merge into main and delete the feature branch after approval.

### Best Practices
- **Small Commits**: Keep commits focused and descriptive.
- **Pull Before Pushing**: Sync with main before starting new work:
  ```bash
  git pull origin main
  ```
- **Test Locally**: Verify changes in a browser before pushing.
- **Avoid Conflicts**: Coordinate with the team when editing shared files.
- **Relative Paths**: Use relative paths for images (e.g., /images/myle-logo.jpg).

## Deployment

The website is deployed using GitHub Pages:

- Push changes to the main branch.
- Ensure GitHub Pages is enabled in the repository settings (source: main branch, /root folder).
- Access the site at https://your-org.github.io/myle-tech-solutions.

For local testing, use:
```bash
npx live-server
```

## Roadmap

- [x] Implement newsletter subscription form
- [x] Add client-side validation for contact form
- [ ] Enhance SEO with meta tags and structured data
- [ ] Integrate blog section for automation insights
- [ ] Add multi-language support
- [ ] Implement user authentication for demo requests

## License

This project is licensed under the MIT License. See the LICENSE file for details.
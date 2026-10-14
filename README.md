# Certificate Generator

A web app for creating certificates of completion. Enter a student's name and the activities they completed, and the app generates a certificate you can view and download as a PNG image.

I built this project to study **Angular 22**: standalone components, the new control flow (`@if`, `@for`), routing, template-driven forms and services.

🔗 **Live demo:** _coming soon_
<!-- 📸 After the deploy, replace "coming soon" above with the link, e.g. [certificate-generator.vercel.app](https://...) -->

---

## Features

- Generate a certificate with the student's name and a list of activities
- View every certificate you've generated
- Download a certificate as a PNG image
- Remove certificates from the list
- Certificates are saved in the browser (`localStorage`), so they stay after a refresh

## Built with

- [Angular 22](https://angular.dev): standalone components and the new control flow
- [Bootstrap 5](https://getbootstrap.com): layout and utility classes
- [Phosphor Icons](https://phosphoricons.com): icons
- [html2canvas](https://html2canvas.hertzen.com): turns the certificate into an image for download
- [Vitest](https://vitest.dev): unit tests

## Getting started

You need [Node.js](https://nodejs.org) 22.22 or later.

```bash
git clone https://github.com/biancacangussu/certificate-generator.git
cd certificate-generator
npm install
npm start
```

Then open [http://localhost:4200](http://localhost:4200).

| Command | What it does |
|---|---|
| `npm start` | Starts the development server |
| `npm run build` | Builds the production version into `dist/` |
| `npm test` | Runs the unit tests |

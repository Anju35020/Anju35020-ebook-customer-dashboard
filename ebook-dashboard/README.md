# EbookDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



# EbookDashboard

This is the **E-Book Dashboard** built using Angular 19's **Standalone Components**. Users can sign up, log in, browse books on dashboard page, purchase book, read book, track progress bases of category. All data and state are handled client-side using RxJS and `localStorage`.

---

## Submission Guidelines

### Code Repository

- Git is used for version control.
- This repo follows Git best practices (clean commits, structured folders).
- See [below](#-getting-started) for setup and run instructions.

---

## Documentation

### Approach

- Utilized Angular 19’s **Standalone Component** — no `AppModule`.
- JWT authentication simulated using `localStorage`.
- Books and user data are stored and managed locally.

### Challenges

- Implementing navigation without modules.
- Keeping UI in sync with reactive data from `localStorage`.
- Managing authentication logic with route guards (`authGuard`).

---

## Tech Stack

- Angular 19 Standalone
- RxJS for reactive patterns
- Tailwind CSS for styling
- Font Awesome for icons
- `localStorage` for simulated backend/auth state

---

### Clone the repository

```bash
git clone https://github.com/Anju35020/Anju35020-ebook-customer-dashboard.git
cd ebook-dashboard


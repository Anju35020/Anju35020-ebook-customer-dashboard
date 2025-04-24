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


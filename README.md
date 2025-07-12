# 🔍 GitHub User Search & Repo Viewer (React + GitHub API)

A React application that lets you search for GitHub users (up to 5 matching results) and view all repositories of a selected user.

---

## 🚀 Features

- 🔐 GitHub API v3 integration with **token-based authentication**
- 🔍 Search for GitHub users by username
- 📂 View repositories of selected users (no repo limit)
- 📦 State managed using `React Context`
- 🧪 Fully unit tested with **Jest** and **React Testing Library**

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [Tailwind CSS](https://tailwindcss.com/) (optional)

---

## 🔑 GitHub Token Setup

To authenticate with GitHub's REST API:

1. Go to: [Generate a Personal Access Token](https://github.com/settings/tokens)
2. Select `public_repo` and `user` scopes.
3. Copy the token.
4. Create a `.env` file in your root:


# DevDifferent Project

Welcome to **DevDifferent**, a modern web application built with React, Vite, and TypeScript. This project incorporates a variety of cutting-edge technologies, including Tailwind CSS for styling and Apollo Client for GraphQL queries.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [License](#license)

## Features

- **React** for a dynamic user interface.
- **Vite** for lightning-fast development and builds.
- **TypeScript** for type-safe development.
- **Tailwind CSS** for utility-first styling.
- **Apollo Client** for managing GraphQL queries and mutations.
- **Radix UI** for accessible and composable UI primitives.
- **ESLint** and **Prettier** for consistent and error-free code.

## Requirements

Make sure you have the following installed:

- **Node.js**: >= 16.x
- **npm**: >= 8.x or **yarn**: >= 1.x

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thoriqdharmawan/devdifferent
   cd devdifferent
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following content:

   ```env
   VITE_API_URL=https://rickandmortyapi.com/graphql
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open your browser at `http://localhost:5173`.

## Usage

- Modify and extend components in the `src` folder.
- Configure styling using Tailwind CSS in `tailwind.config.js`.

## Environment Variables

The project uses the following environment variable:

- **`VITE_API_URL`**: Specifies the GraphQL endpoint used by Apollo Client.  
  Example: `https://rickandmortyapi.com/graphql`

Ensure this variable is set up correctly in your `.env` file.

## Available Scripts

- **`yarn dev`**: Starts the development server.

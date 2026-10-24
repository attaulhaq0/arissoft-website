# Arissoft Solutions website

A freelance web development project for an IT services company, built with React, TypeScript and a PHP/MySQL contact and content API. This repository contains the implementation, website assets and design documentation together.

![Arissoft desktop and mobile presentation](docs/images/devices.webp)

[Design notes and screenshots](docs/design-notes.md) · [Database setup](database/README.md)

## Website

The public routes cover Home, About, Services and Contact. The interface includes an animated three-slide hero, service and industry sections, responsive navigation, page transitions and a contact form with submission feedback.

The frontend uses Vite, Tailwind CSS, Radix-based UI components and React Query. PHP endpoints in `public/api/` provide website content and store contact submissions with prepared MySQL statements.

## Local setup

Use Node.js 22 and npm:

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Vite serves the frontend on port 8080. To inspect the production build:

```sh
npm run build
npm run preview -- --host 127.0.0.1
```

## PHP API and deployment

Use a PHP-capable web server with PDO MySQL support for backend features. Review [the database instructions](database/README.md), then initialize a new local database with `database/schema.sql`. Set `DB_HOST`, `DB_NAME`, `DB_USER` and `DB_PASS` in the PHP server environment.

The API client currently calls the same-origin `/api` path. Vite does not execute PHP and has no API proxy configured. For local backend work, map `/api` to a local PHP server through your web server or development proxy.

The production build includes `public/api/` in `dist/api/`. Deploy the contents of `dist/` to a PHP-capable document root and configure SPA fallback for the application routes. Review the supplied Apache `.htaccess` for your target host. Keep database SQL, environment files and private credentials outside the public document root. PHP mail delivery requires server-side mail configuration.

## Verification

```sh
npm run typecheck
npm run build
npm audit --audit-level=high
find public/api -type f -name '*.php' -exec php -l {} \;
```

[The verification workflow](.github/workflows/verify.yml) runs these checks and scans source plus Git history using the official checksum-verified Gitleaks binary. It uses read-only repository permissions.

## Source map

- `src/pages/` — route components.
- `src/components/` and `src/hooks/` — interface components and interaction logic.
- `src/index.css` and `tailwind.config.ts` — design tokens and utilities.
- `public/api/` and `database/` — PHP endpoints and database schema.
- `docs/images/` — desktop and mobile screenshots.

Brand assets and third-party dependencies retain their respective ownership and license terms.


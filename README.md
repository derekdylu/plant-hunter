# Plant Hunter

Plant Hunter is an interactive quiz game created to accompany the documentary campaign **花開富貴：找到你靈魂中的稀有植物**. Players answer ten illustrated questions, receive one of four plant profiles, and can share the result.

## Project status

The game can run as a static React application; optional Netlify Functions record aggregate quiz and share events in MongoDB.

Before publishing or deploying a fork, review the [publication checklist](#publication-checklist), especially the media rights and privacy items.

## Technology

- React 18 and React Router
- Vite 8
- Tailwind CSS and Sass modules
- Netlify Functions
- MongoDB for optional aggregate event storage
- Vitest and Testing Library

## Requirements

- Node.js 20.19 or newer (Node.js 22 or newer is recommended)
- npm 10 or newer
- Optional: a MongoDB database and the Netlify CLI for testing the functions locally

## Local development

The quiz UI works without a database. Analytics requests fail closed and do not interrupt gameplay when the functions are unavailable.

```bash
cd frontend
npm ci
npm run dev
```

Vite prints the local URL when the development server starts.

To run the UI and Netlify Functions together, copy the safe configuration template, set a private MongoDB URI, and run `netlify dev` from the repository root with the Netlify CLI installed:

```bash
cp frontend/.env.example frontend/.env
netlify dev
```

## Configuration

| Variable | Scope | Required | Purpose |
| --- | --- | --- | --- |
| `MONGO_URI` | Netlify Functions only | For event storage | MongoDB connection string; keep secret |
| `MONGO_DB_NAME` | Netlify Functions only | No | Database name; defaults to `db` for compatibility |
| `VITE_PUBLIC_SITE_URL` | Browser | No | Canonical URL used by share buttons; defaults to the current origin |
| `VITE_GA_MEASUREMENT_ID` | Browser | No | Enables Google Analytics when set to a valid public measurement ID |

See [`frontend/.env.example`](frontend/.env.example) for non-secret examples. Configure production secrets through Netlify's environment-variable controls, not `netlify.toml`.

## Verification

Run these commands from `frontend/`:

```bash
npm test
npm run build
npm audit
```

The production build is written to `frontend/dist/`. The root [`netlify.toml`](netlify.toml) contains the reproducible Netlify build, functions, redirect, runtime, and response-header settings.

## Data handling

The browser stores quiz progress in three origin-scoped `localStorage` keys: `plant-hunter`, `ops`, and `result`. Completing the quiz sends answer indexes and the calculated result to `/api/results`; using a share control sends one allowlisted action to `/api/shares`. The functions add a server timestamp, validate and size-limit requests, apply per-IP rate limits, and return no database records or internal error details.

The UI does not request a name or email address. Hosting and analytics providers may still process network metadata under their own policies. Anyone deploying the project must review the in-app privacy notice, define retention, and make it accurate for the chosen providers and jurisdiction.

## Repository layout

```text
frontend/
  netlify/functions/   Validated event endpoints
  public/              Static share images and web metadata
  src/                 React application and visual assets
  package.json         Commands and dependency declarations
netlify.toml            Netlify build and runtime configuration
```

## Publication checklist

- Confirm that the repository owner has the right to publish the source, campaign copy, documentary excerpts, logos, illustrations, photographs, fonts, and other media.
- Document any asset-specific license or attribution requirements. Do not assume every media file is covered by the software license.
- Review the in-app privacy notice, analytics choice, data retention, database access controls, and production contact details.
- Configure `MONGO_URI` only in the Netlify Functions scope and restrict the database account to the required database and insert operations.
- Re-run the tests, build, dependency audit, and secret scans before deployment.
- Inspect GitHub secret scanning, code scanning, Dependabot alerts, releases, Pages, wiki, workflow artifacts, and repository visibility with authenticated owner access.

## License

The repository currently includes the [Apache License 2.0](LICENSE) for the software. The redistribution rights for campaign branding and media have not been independently verified; confirm them before public release or reuse.

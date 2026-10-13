# Merchant Fintech Research

A deployable research atlas of the merchant journey, fintech needs and growth and revenue-recovery opportunities. This replaces the previous learning application; earlier work remains available in Git history.

## Included

- 208 pain-point hypotheses across 10 buckets and 52 subtrees.
- Growth, revenue recovery and other-opportunity prioritisation.
- Provider coverage, solution directions, rationales and source references.
- Selected opportunities and the Razorpay agent experience guide.
- Downloadable Markdown, JSON and editable draw.io research files.

The homepage opens Growth priorities. All other sections remain available through navigation. The original artifact is also available at `/merchant-research.html`.

## Run locally

Requires Node.js 20 or later. No third-party dependencies or API keys are required.

```sh
npm run dev
```

Open http://127.0.0.1:4173. To generate the static output:

```sh
npm run build
```

## Deploy on Vercel

Import `githubsaurav/learning-product-management` and deploy the `main` branch.

- Framework preset: **Other**
- Root directory: repository root (`./`)
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

The included `vercel.json` sets the framework, build command and output directory. If an existing Vercel project was configured for the earlier app, confirm its root directory is still the repository root and remove obsolete custom install commands.

After deployment, Growth priorities is available at `/#priority-growth`. No SPA rewrites are needed: all linked HTML files are included in the output.

## Repository layout

- `site/`: complete static artifact and supporting linked files.
- `scripts/build.mjs`: copies the site into `dist`.
- `scripts/serve.mjs`: local preview server.
- `vercel.json`: deployment configuration.

## Research limitations

The artifact is desk research, not merchant interview evidence. Pain statements and prioritisation scores are hypotheses. Provider scores describe documented coverage, not percentages solved or verified investment intensity. Public documentation can change, and failure to find a feature is not proof of absence. Examples and merchant personas are illustrative. The original FigJam link may require access and the board update was partial; the complete artifact is hosted here.

No real payment actions, merchant account connections, model training or backend services are included.

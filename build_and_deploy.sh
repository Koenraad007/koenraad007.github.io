#!/usr/bin/env bash
# Build the site and publish it to the gh-pages branch (macOS/Linux equivalent of build_and_deploy.ps1).
set -euo pipefail

# Always run from the repository root, wherever the script is called from.
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "node_modules not found, installing dependencies..."
  npm ci
fi

npx ng build
npx angular-cli-ghpages --dir=dist/website/browser

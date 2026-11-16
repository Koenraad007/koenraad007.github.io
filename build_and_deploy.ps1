try {
    cd "C:/Users/Koenv/Documents/Projects/Website/Koenraad007.github.io"
    ng build
    npx angular-cli-ghpages --dir=dist/website/browser
}
catch {
    "Error occurred"
}
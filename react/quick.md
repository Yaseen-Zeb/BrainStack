# Things Node does (build-time jobs)

## Babel
JSX → JavaScript
`<h1>Hello</h1>` to `React.createElement("h1", null, "Hello");`
Done by Babel (running on Node)

## Modern JS → Browser-compatible JS
`const x = () => {}` to `function x() {}`

## Module bundling
Browser can’t load:
`import App from "./App.jsx";`
Node tools bundle everything into:
`main.js`

## Handle CSS, images, assets
`import "./App.css";`
`import logo from "./logo.png";`
Node:
- Injects CSS
- Converts images to URLs
- Optimizes assets

# Then why does React “run directly” in local dev? like (localhost:3000)
This is the tricky part
It looks like it’s running directly — but it’s not.
## Dev mode vs Build mode
### Development mode
`npm start` or `npm run dev`
What happens:
Node starts a dev server
JSX is converted on the fly
Files(css,js,html) are served from memory
Browser reloads instantly
📌 This is NOT a full build
📌 It’s live transformation
### Production build
`npm run build`
What happens:
Node converts everything once
Optimizes + minifies
Creates /build or /dist

# Why dev mode feels “direct”
Because:
- Code is transformed as you save
- Browser instantly reloads
- No dist/ folder created
- But Node is still working in the background.

| Phase         | Node | Browser |
| ------------- | ---- | ------- |
| JSX transform | ✅    | ❌       |
| Bundling      | ✅    | ❌       |
| Dev server    | ✅    | ❌       |
| UI rendering  | ❌    | ✅       |
| DOM updates   | ❌    | ✅       |

cover these topics
https://www.youtube.com/watch?v=uE925hp9KDk&list=PLlasXeu85E9dg5N37gDfclwzTqtoW7h5j&index=4
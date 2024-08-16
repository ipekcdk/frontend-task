1. yarn add tailwindcss -D
2. npx tailwind init tailwind.js --full
3. yarn add postcss-cli autoprefixer -D
4. touch postcss.config.js [see code inside]
5. mkdir 'styles', touch 'styles/index.css' and 'styles/tailwind.css'
6. add @tailwind base (...components and utilities) in 'styles/index.css'
7. import './styles/index.css' inside 'index.js'
8. update scripts inside package.json

# Notes
An application made to manage tasks

## Technologies used
- Node.js v22.4.1
- Bootstrap v5.3.3
- Handlebars v10.8.1
- MongoDB v7.0.11

## Environment settings
1. Install Node.js
```bash
# Install NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
```bash
# Install Node.js
nvm install 22.4.1
```

2. Install MongoDB

  Install according to your system following the official documentation:
  https://www.mongodb.com/docs/manual/installation/

5. Clone the project
```bash
git clone https://github.com/GuilhermeHenn/notes.git
```
## Run Notes
1. Initialize MongoDB
```bash
systemctl start mongod
```

2. Install dependencies
```bash
npm install body-parser express express-handlebars nodemon
```

2. Run the project
```bash
npm run notes
```

Afterwards, just access localhost:8000 in your browser.

# Express-Note-Taker

An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end. It saves and retrieves note data from a JSON file.

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Features

- Create new notes
- Retrieve all notes
- Delete notes

## Technologies Used

- Node.js
- Express.js
- UUID for generating unique IDs
- File system (fs) module for reading and writing data to JSON file

## Project Structure
/your-project-directory
/db
db.json
/public
index.html
notes.html
app.js
styles.css
/routes
apiRoutes.js
htmlRoutes.js
fileUtils.js
index.js (or app.js)
package.json

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/AhmedGarcia/Express-Note-Taker.git
```

2. **Navigate to the project directory:**

```bash
cd notes-app
```

3. **Insrtall dependencies:**

```bash
npm install
```


## Usage

1. **Start the server:**

```bash
npm start
```

2. **Open your browser and navigate to:**

```arduino
http://localhoost:3000
```

## API Endpoints

  **GET/api/notes**
   Retrieve all notes.

   Response:

   ```json
  [{
    "id": "1",
    "title": "Note title",
    "text": "Note content"
   }]
   ```

  **POST/api/notes**
   Create a new note

   Request Body:

   ```json
   {
   "title": "Note title",
   "text": "Note content"
   }
   ```

   Response:

   ```json
   {
   "id": "1",
   "title": "Note title",
   "text": "Note content"
   }
   ```

  **DELETE/api/notes/**
   Delete a note by ID.

   Response:

```json
    {
        "message": "Note deleted successfully!"
    }
```


## Contributing

1. **Fork the repository**

2. **Create a new branch:**

```bash
git checkout -b feature-branch
```

3. **Make your changes**

4. **Commit your changes:**

```bash
git commit -m 'Add some feature'
```

5. **Push to the branch:**

```bash
git push origin feature-branch
```
6. **Submit pull request**

## License

This project is licensed under the MIT License. See the LICENSE file for details.


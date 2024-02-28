const http = require('http');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then((studentsData) => {
        res.statusCode = 200;
        res.write('This is the list of our students\n');

        Object.entries(studentsData).forEach(([field, students]) => {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        });

        res.end();
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

module.exports = app;

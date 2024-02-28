const fs = require('fs');

function countStudents(path) {
  let content;
  try {
    content = fs.readFileSync(path, { encoding: 'utf8' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  let lines = content.split('\n');
  lines = lines.filter((line) => {
    return line.length > 0 && line !== 'firstname,field';
  });

  console.log(`Number of students: ${lines.length}`);

  const fields = {};
  for (const line of lines) {
    const student = line.split(',');
    if (!fields[student[1]]) {
      fields[student[1]] = [];
    }
    fields[student[1]].push(student[0]);
  }

  for (const field in fields) {
    console.log(`Number of students in ${field}: ${fields[field].length}. `
      + `List: ${fields[field].join(', ')}`);
  }
}

module.exports = countStudents;

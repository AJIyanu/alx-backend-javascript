const http = require('http');
const countStudent = require('./3-read_file_async.js');

const host = "127.0.0.1";;
const port = "1245";

const app = http.createServer( async (req, res) => {
    res.statusCode = 200;
    if (req.url === '/') {
        res.end('Hello Holberton School!');
      } else if (req.url === '/students') {
        let studList = 'This is the list of our students\n';
        await countStudent(process.argv[2])
          .then((msg) => {
            studList += msg;
            res.end(studList);
          })
          .catch((err) => {
            studList += err.message;
            res.end(studList);
          });
      }
    });

    app.listen(port, host, () => {
      console.log(`Server running at http://${host}:${port}`);
    });

    module.exports = app;

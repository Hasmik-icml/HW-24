const express = require('express');

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));

const student = [];

app.post('/student', (req, res) => {
  student.push(
  {
    name: req.body.name,
    age: req.body.age,
  }
)
res.send(student);
});

app.get('/student/:name', (req, res) => {
  for(let i = 0; i < student.length; ++i){
    
    if(student[i].name === req.params.name){
      return res.send(student[i]);
    } 
  }
});

app.delete ('/student/:searchBy/:name', (req, res) => {
 for (let i = 0; i < student.length; ++i) {
   if (student[i][req.params.searchBy] === req.params.name) {
     delete student[i];
   }
 }
 res.send('dleted');
})

app.put('/student/։searchBy/:name/։age', (req, res) => {
  for (let i = 0; i < student.length; ++i){
      if (student[i][req.params.searchBy] === req.params.name){
        return res.send(student[i]["age"] = req.params.age);
      }
  }
 
});

app.listen(3000, () => {
  console.log("ok");
});

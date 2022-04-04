const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
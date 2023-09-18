const form = new FormData();
form.append("file", "<file>");

const options = {
  method: 'POST',
  headers: {
    Authorization: 'Bearer sk-eaa424045b164abb8c9431b28c6636a0',
    'Content-Type': 'multipart/form-data'
  }
};

options.body = form;

fetch('https://api.worqhat.com/api/ai/v2/pdf-extract', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
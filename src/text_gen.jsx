const options = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer sk-eaa424045b164abb8c9431b28c6636a0',
      'Content-Type': 'application/json'
    }
  };
  
  fetch('https://api.worqhat.com/api/ai/search/v3', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
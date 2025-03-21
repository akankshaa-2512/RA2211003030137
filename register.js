const axios = require("axios");

const data = {
    companyName: "goMart",
    ownerName: "Akanksha Anand",
    rollno: "RA2211003030137",
    ownerEmail: "aa0896@srmist.edu.in",
    accessCode: "SUfGJv",  
};

axios.post('http://20.244.56.144/test/register', data, {
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000
})
.then(response => {
    console.log("Success:", response.data);
})
.catch(error => {
    console.error("Error Details:", error.response?.data || error.message);
});
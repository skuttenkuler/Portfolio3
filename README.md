# Portfolio 3
Dynamic Portfolio for Berkely Bootcamp

# Deployed Link
[Portfolio 3](https://github.com/skuttenkuler/Portfolio3.git)


# Screenshot

![Alt text](./public/assets/img/screenshot1.png?raw=true "Preview")
![Alt text](./public/assets/img/screenshot2.png?raw=true "Preview")

# Technologies
* HTML
* CSS
* Javascript
* jQuery
* [NodeJS](https://nodejs.org/en/)
    * [Express](https://expressjs.com/)
    * [Nodemailer](https://nodemailer.com/about/)


# Code Snippets
    - Utilizing Nodemailer to send emails to my account from inquirers.

```javascript
   function sendEmail(){
    
    //set transport
    let transport = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL,
            pass:process.env.PASS
        }
    });
    //set options
    let mailOpt = {
        from: $('#input-email').val(),
        to:'',
        subject:$('#full-name').val(),
        text:$('#email-subject').val()
    }
    //onComplete
    transport.sendMail(mailOpt, (err,data) => {
        if(err){
            console.log(err)
        } else {
            alert("Message Sent")
        };
        
    })
};

    

# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)

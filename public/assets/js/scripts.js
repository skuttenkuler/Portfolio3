

const nodemailer = require('nodemailer');
//email
$('#fs-frm').on("click", (event) => {
    event.preventDefault();
    sendEmail();
})
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
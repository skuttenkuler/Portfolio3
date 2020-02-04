//post route for mailer
module.exports = (app) => {
    app.post('/contact', (req,res) => {
    
        //SMTP Server
       var transporter = nodemailer.createTransport({
           service:'gmail',
           auth: {
            user: 'samkuttenkuler@gmail.com',
            pass: 'Ronicobi2'
        }
       })

        //specify email
        const mailOpts = {
            from:'Email..',
            to: 'me@gmail.com',
            subject: 'New Message',
            text: `${req.body.name} (${req.body.email} says: ${req.body.message})`
        }
        //send mail
        transporter.sendMail(mailOpts, (err, res) => {
            if(err){
                res.render('contact-failed')
            } else {
                res.render('success')
            }
        })
    })
}
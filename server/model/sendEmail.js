// const AWS = require("aws-sdk");

// const config = new AWS.Config({
//     region: "us-east-1",
//     secretAccessKey: process.env.SECRET,
//     accessKeyId: process.env.KEY_ID
// });
// const ses = new AWS.SES(config);

// function sendResetLink(email) {
//     const params = {
//         Destination: {
//             ToAddresses: [
//                 email,
//             ]
//         },
//         Message: {
//             Body: {
//                 Text: {
//                     Charset: "UTF-8",
//                     Data: `To reset your password, please click on this link: http://localhost:3000/reset/${id}`
//                 }
//             },
//             Subject: {
//                 Charset: "UTF-8",
//                 Data: "Reset password instructions"
//             }
//         },
//         Source: "svasire@iu.edu",
//     };

//     ses.sendEmail(params, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// }


// module.exports = sendResetLink;
var nodemailer = require("nodemailer");

function sendResetLink(email,id){
var from = 'seproject101@gmail.com';
var to = email;
var subject = "reset password";
var message = "To reset your password, please click on this link: http://localhost:3000/reset/${id}";

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seproject101@gmail.com',
      pass: 'wfrnwjjzgcbbgbst'
    }
})
//  console.log("+++++++++++++++++++++++++++++hi hi",email);

var mailOptions = {
    from: 'seproject101@gmail.com',
    to:'seproject101@gmail.com',
    subject:"reset password",
    text:"To reset your password, please click on this link: http://localhost:3000/reset"
}

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log("Email Sent: " + info.response);
    }
    response.redirect("/");
})

}
 
module.exports = sendResetLink;

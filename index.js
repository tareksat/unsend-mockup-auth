require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const loginRouter = require('./apis/login/loginRoute');
const signupRouter = require('./apis/signup/signupReouter');
const verifyRouter = require('./apis/verify/verfiyRouter');
const resendVerificationCodeRouter = require('./apis/resendVerificationCode/resendVerificationCodeRouter');
const forgetPasswordRouter = require('./apis/forgetPassword/forgetPasswordRouter');
const verifyResetPasswordCodeRouter = require('./apis/verifyResetPasswordCode/verifyResetPasswordCodeRouter');
const changePasswordRouter = require('./apis/changePassword/changePasswordRouter');
const resetPasswordRouter = require('./apis/resetPassword/resetPasswordRouter');


const app = express()
app.use(express.json());
app.use(morgan("tiny"));

const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;

app.use(BASE_URL, loginRouter);
app.use(BASE_URL, signupRouter);
app.use(BASE_URL, verifyRouter);
app.use(BASE_URL, resendVerificationCodeRouter);
app.use(BASE_URL, forgetPasswordRouter);
app.use(BASE_URL, verifyResetPasswordCodeRouter);
app.use(BASE_URL, changePasswordRouter);
app.use(BASE_URL, resetPasswordRouter);



app.listen(PORT, () => {
    console.log(`Mockup Server is running on port ${PORT}`);
});

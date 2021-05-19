const { body, validationResult } = require('express-validator')
const repo = require('./routes/users')
const admin = require("firebase-admin");

module.exports = {
     userCreationValidators:[
        body('email').notEmpty().isEmail().custom(async (email) => {
          const existingUser =
            await admin.auth().getUserByEmail(email)     
          if (existingUser) {
            throw new Error('Email already in use')
          }
        }),
        body('fName').notEmpty().matches(/^[A-Za-z\s]+$/),
        body('lName').notEmpty().matches(/^[A-Za-z\s]+$/),
        body('phoneNumber').notEmpty().isInt(),
           body('pwd').notEmpty().isLength({min:6}),
          body('conPwd').custom(async (confirm_pass, { req }) => {
          const password = req.body.password
          if (password !== confirm_pass) {
             throw new Error("Passwords don't match")
           }
         }),
         body('phoneNumber').notEmpty().isInt(),
         body('bio').notEmpty().isLength({max:3000})
      ],
      artistValidators:[body('stageName').notEmpty(),
                        body('genres').notEmpty().matches(/^[A-Za-z\s]+$/),
                        body('instruments').notEmpty(),
                        body('location').notEmpty(),
                        body('Instagram').isURL()],
      barOwnerValidators: [body('name').notEmpty(),
      body('type').notEmpty(),
      body('opDays').notEmpty().isInt(),
      body('opHours').notEmpty().isInt(),
      body('adress').notEmpty(),
      body('bio').isLength({max:3000}),
      body('website').isURL(),
      body('kosher').notEmpty(),
    ]
}
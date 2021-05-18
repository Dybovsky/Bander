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
        body('fName').notEmpty().withMessage("Please enter numbers"),
        body('lName').notEmpty(),
        body('phoneNumber').notEmpty().isInt(),
           body('password').notEmpty().isLength({min:6}),
          body('confirm_pass').custom(async (confirm_pass, { req }) => {
          const password = req.body.password
          if (password !== confirm_pass) {
             throw new Error("Passwords don't match")
           }
         }),
         body('userType').notEmpty().isIn(['artist','owner'])
      ],
      artistValidators:[body('bio').notEmpty().isLength({max:3000}),
                        body('Instagram').isURL(),
                        body('kosher')],
      barOwnerValidators: [body('eName').notEmpty(),
      body('eTyoe').notEmpty(),
      body('dOpen').notEmpty().isInt(),
      body('hOpen').notEmpty().isInt(),
      body('adress').notEmpty(),
      body('eBio').notEmpty().isLength({max:3000}),
      body('Instagram').isURL(),
    ]
}



// function validate (method) {
//   switch (method) {
//     case 'createUser': {
//      return [ 
//         body('email', 'Invalid email').exists().isEmail(),
//         body('phone',"invalid phone").optional().isInt(),
//         body('status').optional().isIn(['enabled', 'disabled'])
//        ]   
//     }
//   }
// }

// exports.validate = validate
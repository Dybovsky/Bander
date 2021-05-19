const validateSignIn = (inputs) => {
    const errors = {};
    if (!inputs.email) {
        errors.email = 'Check Email';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!inputs.password || inputs.password.length < 6) {
        errors.password = 'Check Password'
    }
    return errors;
}
export default validateSignIn;
//FOR SIGNUP BELOW:

// if (!inputs.email) {
//     errors.email = 'Check Email';
// } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
// ) {
//     errors.email = 'Invalid email address';
// }


// if (!inputs.pwd || inputs.pwd.length < 6 || inputs.pwd != inputs.conPwd) {
//     errors.pwd = 'Check Password'
// }

// if (!inputs.fName) {
//     errors.fName = 'Check name'
// } else if (
//     !/^[A-Za-z\s]+$/.test(inputs.fName)
// )
// {
//     errors.fName = 'Invalid name';
// }

// if (!inputs.lName) {
//     errors.lName = 'Check name'
// } else if (
//     !/^[A-Za-z\s]+$/.test(inputs.lName)
// )
// {
//     errors.lName = 'Invalid name';
// }


// if (!inputs.phoneNumber) {
//     errors.phoneNumber = 'Check phone'
// } else if (
//     !/^\d+$/.test(inputs.phoneNumber)
// )
// {
//     errors.phoneNumber = 'Invalid phone number';
// }

// if (!inputs.bio || inputs.pwd.length > 3000) {
//     errors.bio = 'Check bio'
// }
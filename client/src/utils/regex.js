const alphaNumeric = {
    // regex: "^[a-zA-Z0-9 \n@#!_$^&*,.;'\":`~()?/-]+$", //[a-zA-Z0-9 \n@#!_$^&*,.;'\":`~()?\/-
    // Note: everything except %
    regex: "[^%<>]+$", 
    error: ["Invalid input!", "This field expects alphanumeric characters value except %, < or > characters."]
};
const password = {
    regex: '^(?=.*?[0-9])(?=.*?[@#!$%^&*,.?])[a-zA-Z0-9@#!$%^&*,.?]{7,15}$',
    error: ['Too easy password!', 'Password should contain atleast one capital letter, special character and number']
};
const email = {
    regex: '[a-z0-9.#&%_$!]+@[a-z]{4,12}[.]+[a-z.]{2,}',
    error: ['Invalid e-mail account!', 'Required is an email address, given is not a valid email...']
};
const phoneNumber = {
    regex: '[0-9+ ]{10,13}',
    error: ['Invalid phone number!', 'Required is valid phone number with country code or without country code']
};
const IDNumber = {
    // 1 1996 8 0093958 3 82 Rwandan national identifier
    regex: '[0-9+ ]{16,21}',
    error: ['Invalid ID Number!', 'Required is valid ID number, at least 16 digits if no spaces.']
};
const date = {
    regex: '[0-9]{4}[/-][0-9]{2}[/-][0-9]{2}',
    error: ['Invalid date selection', 'Select valid date format, eg. 1970/01/01']
};

// const inputLostFocus = (e) => {
//     e.target.setAttribute('focused', true)
// }

export { alphaNumeric, password, email, phoneNumber, IDNumber, date }
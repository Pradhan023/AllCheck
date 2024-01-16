import * as Yup from 'yup'

export const registration = Yup.object({
    name:Yup.string().min(2,'Too Short').max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).uppercase(1).required("Please enter your password"),
    confirmpassword:Yup.string().required("confirm password is require").oneOf([Yup.ref("password"),null],"Password must match")
});
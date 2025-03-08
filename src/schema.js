import * as yup from "yup"

const basicSchema=yup.object().shape({
    name:yup.string().min(3,"Name should be minimum 3 letters").matches(/^[a-zA-Z]+$/,"Name field should be letters").required("This filed is required"),
    email:yup.string().email("Enter valid email address").required("This filed is required"),
    phone:yup.string().matches(/^\d{10}$/,"Phone number should be exactly 10 digits").required("This field is required"),
    password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password should be 8 charcter and one upper case and one lower case and one digits and one special charcter")
    .required("This field is required")


})

export default basicSchema;
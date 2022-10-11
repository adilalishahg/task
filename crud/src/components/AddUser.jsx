import { useState } from 'react';
import { Button, FormControl, FormGroup, Input, InputLabel,Typography,styled } from '@mui/material';
import { Formik } from 'formik';

const Container =  styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& >div  { margin:top:20px}`


const initialValues={ email: '', name: '',phone_no: '', address: '' }

const AddUser=()=> {
    const [user,setUser] = useState(initialValues);
    const  handleChange = (e)=>{
        console.log(e)
    }
    
  return (
   
    <Formik
    initialValues={{ email: '', name: '',phone_no: '', address: '' }}
    validate={values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (

        <Container>
            <Typography variant="h4">Add User</Typography>
        <FormControl>
        {errors.email && touched.email && errors.email}
            <InputLabel>Username*</InputLabel>
            <Input type="name"
                name="name"
                onChange={(e)=>handleChange(e)}
                onBlur={handleBlur}
                value={values.name}/>
        </FormControl>
            <FormControl>
                <InputLabel 
                >Email*</InputLabel>
                <Input type="email"
                name="email"
                onChange={(e)=>handleChange(e)}
                onBlur={handleBlur}
                value={values.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone No*</InputLabel>
                <Input type="phone_no"
                name="phone_no"
                onChange={(e)=>handleChange(e)}
                onBlur={handleBlur}
                value={values.phone_no}/>
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input type="address"
                name="address"
                onChange={(e)=>handleChange(e)}
                onBlur={handleBlur}
                value={values.address}/>
            </FormControl>
            <FormControl>
                <Button variant="container">Add User</Button>
            </FormControl>
        </Container>

    
    )}
  </Formik>
  )
}

export default AddUser
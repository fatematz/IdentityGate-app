'use client'
import {authClient} from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";


const SignUpPage=() => {
  
      const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
        const userData=Object.fromEntries(formData.entries());
        console.log("from submitted with:", userData);

        const {data, error}=await authClient.signUp.email({
          name: userData.name,
          email: userData.email,
          password: userData.password,
          callbackURL: '/'
        })

        console.log('sign up responce', {data, error})
        if(error) {
          alert('Error signing up:'+error.message);
        } if(data) {
          alert('Sign up successful!')
        }
    };
    
  return (
      <div className="flex justify-center items-center min-h-[calc(100vh-60px)] ">
        <div className="shadow-2xl p-4 rounded-2xl space-y-3">
            <h1 className="italic text-zinc-400 text-[30px]">sign up</h1>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        {/* name */}
      <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input name="name" placeholder="Enter Your Name" />
            <FieldError />
          </TextField>
          
          {/* email  */}
      <TextField
        isRequired
        name="email"
            type="email"
            autoComplete="off"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input name="email" placeholder="Enter Your Email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input name="password" placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        </div>
        </div>
    );
};

export default SignUpPage;
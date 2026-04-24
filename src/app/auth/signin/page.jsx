'use client'
import {authClient} from "@/lib/auth-client";
import {Check, Eye, EyeSlash} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, InputGroup, Label, TextField} from "@heroui/react";
import {useState} from "react";

const signInPage=() => {

   const [isVisible, setIsVisible] = useState(false);

    const onSubmit=async (e) => {
        e.preventDefault();
        const formData=new FormData(e.currentTarget);
        const userData=Object.fromEntries(formData.entries());
        console.log("from submitted with:", userData)
        
        const {data, error}=await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: '/dashboard'
        })

        console.log( 'sign in response:', {data, error} )

  }
  
   
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-60px)] ">
        <div className="shadow-2xl p-4 rounded-2xl space-y-3">
            <h2 className="italic text-zinc-400 text-[30px]">Sign In</h2>
             <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

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
                  <TextField className="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Your Password"
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
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

export default signInPage;
import {render,screen,fireEvent}  from "@testing-library/react"

import Login from "../Login"

describe("Login Component test",()=>{

    // test case-1

    test("checking the component render",()=>{

        render(<Login/>);

        expect(screen.getByText(/Login/)).toBeInTheDocument();

    })

    // test case -2
    test("checking the invalid credential,while entering wrong credentials",()=>{

       render(<Login/>);
       const emailInput= screen.getByRole("textbox",{name:/Email/});
       const passwordInput=  screen.getByLabelText(/Password/);
       const signInButton= screen.getByRole("button",{name:/Sigin/});

       fireEvent.change(emailInput,{target:{value:"rahul@gmail.com"}})
       fireEvent.change(passwordInput,{target:{value:"rahul123"}});
       fireEvent.click(signInButton);

       expect(screen.getByText("Invalid Credentials")).toBeInTheDocument();

    })

   





})
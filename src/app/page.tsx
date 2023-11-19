"use client"

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/ThemeButton";
import { registerSchema } from "@/validator/auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage , Form} from "@/components/ui/form";
import { cn } from "@/lib/utils";

export default function CardWithForm() {
const [step, setStep] = React.useState(0);
type Input = z.infer<typeof registerSchema>;
const form = useForm<Input>({
  resolver: zodResolver(registerSchema),
  defaultValues:{
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    studentId: "",
  }
});

console.log(form.watch())

const onSubmit = (data: Input) => {
  alert(JSON.stringify(data, null, 2));
  console.log(data)
}


  return (
    <div className=''>
      <div className=''>
        <ModeToggle className='absolute top-6 right-6' />
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Start the journey with us Today.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-2'
              >
                <div
                  className={cn("space-y-3", {
                    hidden: step == 1,
                  })}
                >
                  {/* name */}
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Enter your name' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* email */}

                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder='Enter your email' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* name */}

                  <FormField
                    control={form.control}
                    name='studentId'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student Id</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your studentId'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* password */}
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your Password'
                            {...field}
                            type='password'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div
                  className={cn("space-y-3", {
                    hidden: step == 0,
                  })}
                >
                  {/* confirmPassword */}
                  <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder='Enter your Password confirmation'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* year */}
                  <FormField
                    control={form.control}
                    name='year'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year of study</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder='Select a verified email to display' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[2020, 2021, 2022, 2023].map((year) => (
                              <SelectItem key={year} value={year.toString()}>
                                Year {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type='submit'
                  variant={"outline"}
                  className={cn("space-y-3", {
                    hidden: step == 0,
                  })}
                >
                  Submit
                </Button>
                <Button
                  type='button'
                  variant={"outline"}
                  onClick={() => {
                    form.trigger(['confirmPassword','email','name','password','studentId', 'year'])
                    const emailState = form.getFieldState('email');
                    const nameState = form.getFieldState("name");
                    const passwordState = form.getFieldState("password");
                    const studentIdState = form.getFieldState("studentId");
                    setStep(1)
                  }}
                  className='ml-2'
                >
                  Next
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

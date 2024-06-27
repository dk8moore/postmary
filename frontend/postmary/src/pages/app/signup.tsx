import React from 'react';
import { Link } from "react-router-dom";

import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Card } from "@ui/card";
import { Separator } from "@ui/separator";
import { SiGoogle, SiFacebook } from "react-icons/si";

export function SignUpForm() {
    return (
        <div className="flex dotted-background items-center justify-center min-h-screen min-w-[400px] px-4 py-12 relative">
            <div className="absolute inset-0 lg:hidden">
                <img
                    src="https://picsum.photos/1080/1920"
                    alt="Background Image"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <Card className="flex items-center max-w-6xl lg:min-h-[800px] max-h-[800px] rounded-lg shadow-lg overflow-hidden z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
                    <div className="hidden lg:block h-full">
                        <img
                            src="https://picsum.photos/1080/1920"
                            alt="Image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center mx-auto w-full max-w-md p-12">
                        <div className="text-center">
                            <h4 className="text-2xl font-semibold text-primary-foreground">Create an account</h4>
                            <p className="font-light mt-2 text-gray-400">
                                Enter your information to create an account
                            </p>
                        </div>
                        <div className="mt-12">
                            <Button variant="outline" className="items-center justify-center space-x-2 w-full mb-4">
                                <SiGoogle />
                                <span className="sm:inline">Sign up with Google</span>
                            </Button>
                            <Button variant="outline" className="items-center justify-center space-x-2 w-full mb-4">
                                <SiFacebook />
                                <span className="sm:inline">Sign up with Facebook</span>
                            </Button>
                            <Separator>
                                <Label className="font-light text-gray-400">OR</Label>
                            </Separator>
                            <div className="grid grid-cols-2 gap-4 mt-3">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="Michael" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Scott" required />
                                </div>
                            </div>
                            <div className="space-y-2 mt-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="michael.scott@dundermifflin.com"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full font-bold bg-primary mt-10">
                                Create an account
                            </Button>
                        </div>
                        <div className="mt-6 text-center text-sm">
                            Already have an account?{" "}
                            <Link to="/app/login" className="font-bold text-primary hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

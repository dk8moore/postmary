import React from 'react';
import { Link } from "react-router-dom";

import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { Card } from "@ui/card";
import { Separator } from "@ui/separator";
import { SiGoogle, SiFacebook, SiGithub } from "react-icons/si";

export function LoginForm() {
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
                            <h4 className="text-2xl font-semibold text-primary-foreground">Welcome back</h4>
                            <p className="font-light mt-2 text-gray-400">
                                Sign in to access to your dashboard, settings and projects.
                            </p>
                        </div>
                        <div className="mt-8 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        to="/forgot-password"
                                        className="text-xs text-primary hover:underline"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                                <div className="flex items-center justify-end">
                                    
                                </div>
                            </div>
                            <Button type="submit" className="w-full font-bold bg-primary">
                                Login
                            </Button>
                            <Separator>
                                <Label className="font-light text-gray-400">OR CONTINUE WITH</Label>
                            </Separator>
                            <div className="flex space-x-2">
                                <Button variant="outline" className="flex-1 flex items-center justify-center space-x-2">
                                    <SiGoogle />
                                    <span className="hidden sm:inline">Google</span>
                                </Button>
                                <Button variant="outline" className="flex-1 flex items-center justify-center space-x-2">
                                    <SiFacebook />
                                    <span className="hidden sm:inline">Facebook</span>
                                </Button>
                            </div>
                            {/* <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                                <SiGithub />
                                <span>GitHub</span>
                            </Button> */}
                        </div>
                        <div className="mt-6 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/app/signup" className="font-bold text-primary hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

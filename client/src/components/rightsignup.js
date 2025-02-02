import react, { useEffect, useState } from 'react'
import '../style.css'
import { Route, Link } from 'react-router-dom';
import { Nav, Navbar, Button, Form, Container, Col, Row, Image, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'


export default function Rightsignup() {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        formState,
    } = useForm()

    const { errors } = formState;

    const Submitformdata = async (data) => {
        try {
            const response = await fetch('/Submitformdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(data)
            Swal.fire("Registration Successfull");
        } catch (error) {
            console.error('Registration failed:', error);
            Swal.fire("Registration failed!");
        }
    };

    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col className='vh-150 d-flex justify-content-center align-item-center'>
                            <div className='p-5 rounded-5 bg-white signupbox'>
                                <Form onSubmit={handleSubmit(Submitformdata)}>
                                    <h3>Sign Up</h3>
                                    <div className='mb-2'>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type='name'
                                            placeholder='Enter Name'
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: " Please Enter Valid  Name.!  ",
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Z. ]{1,60}$/,
                                                    message: "Please enter a valid name with at most 60 characters and containing only letters, spaces, and dots.",
                                                },
                                                maxLength: {
                                                    value: 60,
                                                    message: "Name cannot exceed 60 characters.",
                                                },
                                            })}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        />
                                        <p className='errors ms-2'>{errors.name?.message}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="Mobile">Mobile Number</label>
                                        <input
                                            type='number'
                                            placeholder='Enter Number'
                                            {...register("contact", {
                                                required: {
                                                    value: true,
                                                    message: " Please Enter Valid  Mobile No.!  ",
                                                },
                                                pattern: {
                                                    value: /^[6-9][0-9]{9}$/,
                                                    message: "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.",
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: "Mobile Number cannot exceed 10 characters.",
                                                },
                                            })}
                                            className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                                        />
                                        <p className='errors ms-2'>{errors.contact?.message}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="dob">Date Of Birth</label>
                                        <input
                                            type='date'
                                            placeholder='Date of Birth'
                                            {...register("dob", {
                                                required: {
                                                    value: true,
                                                    message: "Please Enter Valid  Date Of Birth.!  ",
                                                },

                                            })}
                                            className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                                        />
                                        <p className='errors ms-2'>{errors.dob?.message}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type='email'
                                            placeholder='Enter Email'
                                            {...register("email", {
                                                required: "Email is required.",
                                                pattern: {
                                                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                                    message: "Please enter a valid email address.",
                                                },
                                                maxLength: {
                                                    value: 100,
                                                    message: "Email cannot exceed 100 characters.",
                                                },
                                            })}
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        />
                                        <p className='errors ms-2'>{errors.email?.message}</p>
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Enter Password'
                                            {...register("password", {
                                                required: "Password is required.",
                                                minLength: {
                                                    value: 8, 
                                                    message: "Password must be at least 8 characters long.",
                                                },
                                            })}
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        />
                                        <p className='errors ms-2'>{errors.password?.message}</p>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" onChange={handlePasswordVisibility}
                                            checked={showPassword} />
                                        <label className="form-check-label d-flex">Check me out</label>
                                    </div>
                                    <div className='mb-3 d-grid'>
                                        <Button variant='primary' type='submit' className='logbtn'>
                                            Register
                                        </Button>
                                        <hr />
                                    </div>
                                    <div className='mb-3 d-grid'>
                                        <p className="mb-0  text-center">
                                            Already have an account??{' '}
                                            <Link to="/" className="text-primary fw-bold">
                                                Sign In
                                            </Link>
                                        </p>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
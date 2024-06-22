import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TestForm from './TestForm';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [Courses, setCourses] = useState([]);
    let Navigate = useNavigate()

    useEffect(() => {
        console.log("----data--==", data);
        data();
    }, []);
    const data = () => {
        axios
            .get("http://localhost:5000/admin/GetCourses")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setCourses(res.data);
            })
            .catch((error) => {
                console.error("fetching error = = ", error);
            });
    };
    const startquiz = (courseId) => {
        axios
            .get(`http://localhost:5000/admin/GetRandomQuestions/${courseId}`)
            .then((res) => {
                if (res.data.status === 200) {
                    Navigate('/testform', {
                        state: { questions: res.data.questions }
                    });
                } else {
                    console.error(res.data.message);
                }
            })
            .catch((error) => {
                console.error("error fetching questions =", error);
            });
    };

    return (
        <>
            <div className='container'>
                <div class="row pt-5">
                    {Courses.data?.map((Courses, index) => (
                        <div class="col-sm-6 pt-5">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">{Courses.name}</h5>
                                    <p class="card-text">10 Questions covering the basics of {Courses.name}</p>
                                    <button type="button" class="btn btn-dark" onClick={() => startquiz(Courses._id)}>Start Quiz</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
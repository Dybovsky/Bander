import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Container, Header, Icon, Image, Message, Segment, TextArea, Input } from 'semantic-ui-react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const VenuePage = () => {

    let userId = useParams();
    const [thisUserVenue, setThisUserVenue] = useState();

    const [estName, setEstName] = useState(null);
    const [estType, setEstType] = useState(null);
    const [daysWeek, setDaysWeek] = useState(null);
    const [hoursWeek, setHoursWeek] = useState(null);
    const [address, setAddress] = useState(null);
    const [bio, setBio] = useState(null);
    const [site, setSite] = useState(null);
    const [kosher, setKosher] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            // axios.get(`http://localhost:5500/signup/${userId}/venue`).then(response => {
            //     setThisUserVenue(response)
            // }).catch(error => {
            //     // alert(error, "Please full fill all the fields");
            // });
        };
        fetchData();
    }, []);

    const handleFormSubmit = async (event) => { 
        event.preventDefault();
        if (estName === null || estType === null ||  daysWeek === null ||  hoursWeek === null ||  address === null ||  bio === null ||  site === null ||  kosher === null) {
            alert("Please full fill all the fields");
        } else {
            const newVenue ={
                estName, estType, daysWeek, hoursWeek, address, bio, site, kosher
            }
            // axios.post(`http://localhost:5500/signup/${userId}/venue`, newVenue).then(response => {
            //     setThisUserVenue(response)
            // }).catch(error => {
            //     // alert(error, "let's try again");
            //     // window.location.href = "http://localhost:3000/signup";
            // });
        }
    };

    return (
        <>
            <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
            <u><h1>VenuePage</h1></u>
                <Segment >
                    <Form className="venueForm" onSubmit={handleFormSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Establishment name' placeholder={thisUserVenue && thisUserVenue.estName || 'Establishment name'}  onChange={e=> setEstName(e.target.value)}/>
                            <Form.Input fluid label='Establishment type (Bar/Restaurant, etc)' placeholder={thisUserVenue && thisUserVenue.estType || 'Establishment type'} onChange={e=> setEstType(e.target.value)}/>
                            <Form.Input fluid label='Days open in th week' placeholder={thisUserVenue && thisUserVenue.daysWeek || 'Days open in th week'} onChange={e=> setDaysWeek(e.target.value)}/>
                            <Form.Input fluid label='Hours open in the week' placeholder={thisUserVenue && thisUserVenue.hoursWeek || 'Hours open in the week'} onChange={e=> setHoursWeek(e.target.value)}/>
                            <Form.Input fluid label='Address' placeholder={thisUserVenue && thisUserVenue.address || 'Address'} onChange={e=> setAddress(e.target.value)}/>
                            <TextArea fluid label='Bio' placeholder={thisUserVenue && thisUserVenue.bio || 'Bio'} onChange={e=> setBio(e.target.value)}/>
                            <Form.Input label='http://' placeholder={thisUserVenue && thisUserVenue.site || 'mysite.com'} onChange={e=> setSite(e.target.value)}/>
                            <Form.Input label='Kosher' placeholder={thisUserVenue && thisUserVenue.kosher || 'kosher?'} onChange={e=> setKosher(e.target.value)}/>
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        </>
    );
};

export default VenuePage;
import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Container, Header, Icon, Image, Message, Segment, TextArea, Input } from 'semantic-ui-react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const AddArtistInfo = () => {

    let userId = useParams();
    const [thisUserArtist, setThisUserArtist] = useState();

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [artName, setArtName] = useState(null);
    const [artInstrument, setArtInstrument] = useState(null);
    const [city, setCity] = useState(null);
    const [bio, setBio] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [kosher, setKosher] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // axios.get(`http://localhost:5500/signup/${userId}/artist`).then(response => {
            //     setThisUserArtist(response)
            // }).catch(error => {
            //     // alert(error, "Please full fill all the fields");
            // });
        };
        fetchData();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (firstName === null || lastName === null ||  artName === null ||  artInstrument === null ||  city === null ||  bio === null ||  instagram === null ||  kosher === null) {
            alert("Please full fill all the fields");
        } else {
            const newArtist ={
                firstName, lastName, artName, artInstrument, city, bio, instagram, kosher
            }
            // axios.post(`http://localhost:5500/signup/${userId}/artist`, newArtist).then(response => {
            //     setThisUserArtist(response)
            // }).catch(error => {
            //     // alert(error, "let's try again");
            //     // window.location.href = "http://localhost:3000/signup";
            // });
        }
    };

    return (
        <>
            <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
            <u><h1>ArtistPage</h1></u>
                <Segment >
                    <Form className="venueForm" onSubmit={handleFormSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='First name' placeholder={thisUserArtist && thisUserArtist.firstName || 'First name'}  onChange={e=> setFirstName(e.target.value)}/>
                            <Form.Input fluid label='Last name' placeholder={thisUserArtist && thisUserArtist.lastName || 'Last name'} onChange={e=> setLastName(e.target.value)}/>
                            <Form.Input fluid label='Artist name' placeholder={thisUserArtist && thisUserArtist.artName || 'Artist name'} onChange={e=> setArtName(e.target.value)}/>
                            <Form.Input fluid label='Artist Instrument' placeholder={thisUserArtist && thisUserArtist.artInstrument || 'Artist Instrument'} onChange={e=> setArtInstrument(e.target.value)}/>
                            <Form.Input fluid label='Artist City' placeholder={thisUserArtist && thisUserArtist.city || 'City'} onChange={e=> setCity(e.target.value)}/>
                            <TextArea fluid label='Bio' placeholder={thisUserArtist && thisUserArtist.bio || 'Bio'} onChange={e=> setBio(e.target.value)}/>
                            <Form.Input label='instagram' placeholder={thisUserArtist && thisUserArtist.instagram || 'Instagram'} onChange={e=> setInstagram(e.target.value)}/>
                            <Form.Input label='Kosher' placeholder={thisUserArtist && thisUserArtist.kosher || 'Kosher?'} onChange={e=> setKosher(e.target.value)}/>
                        </Form.Group>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>
        </>
    );
};

export default AddArtistInfo;
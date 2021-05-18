import { React, useState } from "react";
import { Button, Form, Segment, TextArea, Card } from "semantic-ui-react";

const AddVenueInfo = (props) => {
    const [notFilled, setNotFilled] = useState(false);
    const { setartist, artist } = props;

    const handleChange = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        const copy = { ...artist };
        copy[key] = value;
        setartist(copy);
    };
    return (
        <>
            <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
                <u>
                    <h1>Add Artist Info</h1>
                </u>
                <Segment>
                    <Form className="signUpForms">
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="artName"
                                placeholder="Artistic name"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="genre"
                                placeholder="Genre"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid 
                                name="instruments"
                                placeholder="Instruments I play"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="slogan"
                                placeholder="Your slogan"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="address"
                                placeholder="City"
                                onChange={handleChange}
                            />
                            <TextArea
                                fluid
                                name="bio"
                                placeholder="Artistic Bio"
                                onChange={handleChange}
                            />
                            <Form.Input
                                name="Instagram"
                                placeholder= "Instagram"
                                onChange={handleChange}
                            />
                            <Form.Input
                                name="kosher"
                                placeholder="kosher?"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Segment>
            </div>
        </>
    );
};

export default AddVenueInfo;

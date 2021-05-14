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
                    {notFilled && <Card color="red">Please fill all the fields</Card>}
                </u>
                <Segment>
                    <Form className="venueForm">
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="artName"
                                label="Artistic name:"
                                placeholder="Artistic name:"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="genre"
                                label="Genre:"
                                placeholder="Genre:"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid 
                                name="instruments"
                                label="Instruments:"
                                placeholder="Instruments I play:"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="slogan"
                                label="Your Catch slogan:"
                                placeholder="Aim high, always"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="address"
                                label="City:"
                                placeholder="City"
                                onChange={handleChange}
                            />
                            <TextArea
                                fluid
                                name="bio"
                                label="Bio:"
                                placeholder="Bio"
                                onChange={handleChange}
                            />
                            <Form.Input
                                name="Instagram"
                                label="Instagram :"
                                placeholder= "Instagram"
                                onChange={handleChange}
                            />
                            <Form.Input
                                name="kosher"
                                label="Kosher:"
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

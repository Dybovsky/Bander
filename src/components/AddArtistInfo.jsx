import { React, useState } from "react";
import { Button, Form, Segment, TextArea, Card } from "semantic-ui-react";

const AddVenueInfo = (props) => {
    const [notFilled, setNotFilled] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        type: "",
        opDays: "",
        opHours: "",
        address: "",
        bio: "",
        website: "",
        kosher: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        const copy = { ...inputs };
        copy[key] = value;
        setInputs(copy);
    };

    const handleFormSubmit = () => {
        for (let key in inputs) {
            if (inputs[key] === "") {
                setNotFilled(true);
                return;
            } else {
                setNotFilled(false);
                // Send the objs to DB
            }
        }
    };

    return (
        <>
            <div className="fs-2 text-start m-5" style={{ color: "lightsteelblue" }}>
                <u>
                    <h1>Add Artist Info</h1>
                    {notFilled && <Card color="red">Please fill all the fields</Card>}
                </u>
                <Segment>
                    <Form className="venueForm" onSubmit={handleFormSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                fluid
                                name="name"
                                label="Establishment name:"
                                placeholder="Establishment name"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="type"
                                label="Establishment type (Bar/Restaurant, etc):"
                                placeholder="Establishment type"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="opDays"
                                label="Days open in th week:"
                                placeholder="Days open in th week"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="opHours"
                                label="Hours open in the week:"
                                placeholder="Hours open in the week"
                                onChange={handleChange}
                            />
                            <Form.Input
                                fluid
                                name="address"
                                label="Address:"
                                placeholder="Address"
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
                                name="website"
                                label="http:// :"
                                placeholder="mysite.com"
                                onChange={handleChange}
                            />
                            <Form.Input
                                name="kosher"
                                label="Kosher:"
                                placeholder="kosher?"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Segment>
            </div>
        </>
    );
};

export default AddVenueInfo;
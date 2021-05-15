import React from 'react'
import { Button, Checkbox, Form, Container, Header, Icon, Image, Message, Segment} from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios'
const Signup = () => {

         

const [error, seterror] = useState()
const [name, setName] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [proffesion, setProfession] = useState();
const [genre, setGenre] = useState();





  const handleSubmit = async event => {
    event.preventDefault()
    
    if (!name || name.length < 2){
      seterror('no valid name')
      return
    }
if ( !password || password.length < 6) {
  
  seterror('Password needs to be more than 6')
  return
}

if (!email || email.length < 6){
  seterror('Email is not valid')

  return
}

if (!genre || genre.length < 3){
  seterror('No Genere')
  return
}



    const newUser ={
      name,
      email,
      password,
      genre,
      proffesion
    }

	  console.log(newUser)
	  axios
		  .post('http://localhost:5500/api/users/signup', newUser)
		  .then(response => {
			  console.log(response)
        
        
		  })
      .catch(error => {
        Error(error, seterror('couldnt sign up'))
       
		  })
      
      
  
  }


    return (
      <Container style={{marginTop : "20px"}} text>
          <Segment inverted>

        <Message color='white' as="h2" block>
          <Icon name="music" color="black"/>
       Connect</Message>
      
      <Form inverted>

         
      
        
          
           <Form.Field  >
          <label>
            <span>Full name</span>
            <input type="text" onChange={e => setName(e.target.value)}/>
          </label>
          </Form.Field>
        <Form.Field >
          <label>
            <span>Email address</span>
            <input type="text" onChange={e => setEmail(e.target.value)}/>
          </label>
          </Form.Field>
          <Form.Field >
          <label>
            <span>Password</span>
            <label/>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
            </Form.Field>
            <Form.Group widths='equal' inverted>
            <Form.Field >
          <label>
            <span>Genre</span>
            <input type="text" onChange={e => setGenre(e.target.value)}/>
          </label>
          </Form.Field>
          <Form.Field   >
          <label>
            <span>Profession </span>
            <input type="text" onChange={e => setProfession(e.target.value)}/>
          </label>
          </Form.Field>
          </Form.Group>


{error && <Message size="small" negative content={error}>
  
  </Message>}
          <div>
           
            <Button  size="large" inverted type="submit" onClick={handleSubmit}>signup</Button>
          </div>
      
        </Form>
      
        
        <div>
</div>

      </Segment>
      </Container>
    )
}

export default Signup

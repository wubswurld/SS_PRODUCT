import React, { Component } from 'react';
import * as actions from '../../actions';
import { Input, Label, Button } from 'reactstrap';
import { toast } from 'react-toastify';

class Contact extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
        }  
    }
    handleSubmit = (e) => {
        const Sent = () => <div>Thank you. <br /> Your message has been sent!</div>
        const INITIAL_STATE = {
            name: '',
            email: '',
            phone: '',
            message: '',
          };
        //block re render
        e.preventDefault();
        toast(<Sent />);
        //axios action sends state
        console.log("here");
        actions.contact(this.state)
        .then(res => {
            console.log(res.data.message);
        })
        this.setState({ ...INITIAL_STATE })
    }

    updateValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render () {
        console.log(this.state)
        return (
            <>
            <div>
            <form className='react-form' onSubmit={this.handleSubmit}>
            <h4 id="contact-head" className="contact-head">Get in Touch!</h4>
            <br />
                <Label className="form-label" for="Name">Name</Label>
                <Input onChange={this.updateValue} className='form-input' className="form-input"value={this.state.name} name='name' type='text' placeholder="Name"/>
                <br />
                <Label className="form-label"  for="Email">Email</Label>
                <Input onChange={this.updateValue} className='form-input' name='email' value={this.state.email} type='email' placeholder="Email"/>
                <br />
                <Label className="form-label" for="Phone">Phone</Label>
                <Input onChange={this.updateValue} className='form-input' name='phone' value={this.state.phone} type='phone' placeholder="Phone"/>
                <br />
                <Label className="form-label" for="Message">Message</Label>
                <Input type="textarea" onChange={this.updateValue} className='form-textarea' name='message' value={this.state.message} placeholder="Message" />
                <div className='form-group'>
                    {/* <input className='btn' type='submit'/>   */}
                    <Button outline color="primary" id="send" type="submit" className="send">Send!</Button>
                </div>
            </form>
            </div>
            </>
        )
    }
}
export default Contact;
import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../context';

const Contact = () => {
    const context = useContext(ProductContext);
    const { onSubmitContact } = context;
    return (
        <div className="container text-left d-lg-block mt-90">
            <div className="row">
                <div className="col-10 mx-auto col-lg-6">
                    {/* 
                        rubric57
                        The user should see a form with text input fields for name and
                        email, a dropdown list for subject, and a text area for a message.
                        These fields should have placeholders to show what they
                        represent 
                    */}
                    <form id="contactForm" onSubmit={onSubmitContact}>
                        <div className="form-group">
                            <input type="text" className="form-control w-75" id="contactName" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control w-75" id="contactEmail" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-md w-75">
                                <option>-- Select Subject --</option>
                                <option>Payments</option>
                                <option>Purchases</option>
                                <option>Refunds</option>
                                <option>Suggestion</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control w-75" id="msgArea" rows="10" placeholder="Message"></textarea>
                        </div>
                        {/* 
                            rubric59
                            The user should see a button labeled “Send”
                        */}
                        {/* 
                            rubric61
                            The form should show validation errors if the form isn’t filled out
                            correctly and the send button is pressed (HTML5 validati    on) 
                        */}
                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
                {/* 
                    rubric58
                    The user should see description that shows an email and phone
                    number for the contacting the business 
                */}
                <div className="col-10 mx-auto col-lg-6 mt-5">
                    <p>
                        Have questions about Grocery Cloud? Feel
                        free to contact us!
                    </p>
                    <p>
                        Email: grocerycloud@outlook.com
                        Phone: 123-456-7890
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact

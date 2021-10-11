import Typography from "../../components/Typography/Typography";
import './HomeCollaborateForm.css'

export default function HomeCollaborateForm() {
    return (
        <div className="HomeCollaborateForm" >
            <Typography variant="h2" paragraph>
                Let's collaborate!
            </Typography>
            <Typography  variant="text1" color="secondary" paragraph>
               Ready to begin our journey?Drop us a message and we'll
                get in touch with your asap.
            </Typography>


            <div className="HomeCollaborateForm-form">

                <div className="HomeCollaborateForm-row">
                    <Typography className="HomeCollaborateForm-field">
                        <Typography variant="h4" paragraph>First name</Typography>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Type your name"
                        />
                    </Typography>
                    <div className="HomeCollaborateForm-field">
                        <Typography variant="h4" paragraph>Last name</Typography>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Type your last name"
                        />
                    </div>
                </div>

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <Typography variant="h4" paragraph>E-mail address</Typography>
                        <input className="HomeCollaborateForm-fieldInput" type="email"
                               placeholder="e-mail@address.com"
                        />
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <Typography variant="h4" paragraph>Telephone number</Typography>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="+0 000 000 00 00"
                        />
                    </div>
                </div>

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <Typography variant="h4" paragraph>Budget</Typography>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Chose a budget"
                        />
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <Typography variant="h4" paragraph>Title</Typography>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Type the title"
                        />
                    </div>
                </div>

                <div className="HomeCollaborateForm-field">
                    <Typography className="HomeCollaborateForm-message" variant="h4" paragraph>Message</Typography>
                    <textarea className="HomeCollaborateForm-fieldInput"
                              placeholder="Type your message here"
                    />
                </div>
            </div>
            <input className="HomeCollaborateForm-button" type="button" value="Drop it in our inbox"/>
        </div>
    )
}
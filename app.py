### APP.PY ###

# Imports from libraries
import os
import re
from flask import Flask, render_template, session, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy
from send_mail import send_mail
# Imports from forms.py
from forms import ContactForm
# reCAPTCHA
from flask_recaptcha import ReCaptcha

app = Flask(__name__)

################################
##### SECRET KEY FOR FORMS #####
################################
# ----- prod -----
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
# ----- dev -----
# app.config['SECRET_KEY'] = ''

################################
### SECRET KEY FOR RECAPTCHA ###
################################
app.config['RECAPTCHA_DATA_ATTRS'] = {'size': 'compact'}
# ----- dev -----
# app.config['RECAPTCHA_SITE_KEY'] = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
# app.config['RECAPTCHA_SECRET_KEY'] = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
# ----- prod -----
app.config['RECAPTCHA_SITE_KEY'] = os.getenv('RECAPTCHA_SITE_KEY')
app.config['RECAPTCHA_SECRET_KEY'] = os.getenv('RECAPTCHA_SECRET_KEY')
# Create a ReCaptcha object by passing in 'app' as parameter
recaptcha = ReCaptcha(app)

################################
##### DATABASE ENVIRONMENT #####
################################

ENV = 'prod'

if ENV == 'dev':
    app.debug = True
    # dev database
    uri = str(os.getenv("DATABASE_URL_DEV"))  # or other relevant config var
    if uri.startswith("postgres://"):
        uri = uri.replace("postgres://", "postgresql://", 1)
    # rest of connection code using the connection string `uri`
    app.config['SQLALCHEMY_DATABASE_URI'] = uri
else:
    app.debug = False
    # prod database
    uri = str(os.getenv("DATABASE_URL"))  # or other relevant config var
    if uri.startswith("postgres://"):
        uri = uri.replace("postgres://", "postgresql://", 1)
    # rest of connection code using the connection string `uri`
    app.config['SQLALCHEMY_DATABASE_URI'] = uri

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# create a database object
db = SQLAlchemy(app)

class ContactDB(db.Model):
    __tablename__ = 'contact'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(200))
    email = db.Column(db.String(200))
    subject = db.Column(db.Text())
    msg_type = db.Column(db.String(50))
    msg_body = db.Column(db.Text())

    def __init__(self, name, email, subject, msg_type, msg_body):
        self.name = name
        self.email = email
        self.subject = subject
        self.msg_type = msg_type
        self.msg_body = msg_body

############################
##### ROUTES FOR PAGES #####
############################

@app.route('/', methods = ['GET', 'POST'])
def index():
    form = ContactForm()
    return render_template('index.html', form = form)

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        # if the form passes the ReCaptcha -- use verify to confirm if recaptcha is filled out
        if recaptcha.verify():
            # collect the form information.
            name = request.form['name']
            email = request.form['email']
            subject = request.form['subject']
            msg_type = request.form['msg_type']
            msg_body = request.form['msg_body']
            # debug: print to the console to make sure that the form POST is working.
            # print(name, email, subject, msg_type, msg_body)
            # add the data to the database
            data = ContactDB(name, email, subject, msg_type, msg_body)
            db.session.add(data)
            db.session.commit()
            # send e-mail
            send_mail(name, email, subject, msg_type, msg_body)
            return render_template('confirmsubmit.html')

if __name__ == '__main__':
    #app.run()
    app.run(debug = True)

from flask import Flask, render_template, session, redirect, url_for, request
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# update later to make more secure.
app.config['SECRET_KEY'] = 'secretkey'

# later move to a separate py file.
class ContactForm(FlaskForm):
    name = StringField(validators=[DataRequired()])
    email = StringField(validators=[Email(), DataRequired()])
    subject = StringField(validators=[DataRequired()])
    msg_type = SelectField(choices = [('commission', 'Commission a custom piece'), ('question', 'Ask a Question'), ('other', 'Other')])
    msg_body = TextAreaField(validators=[DataRequired()])
    submit = SubmitField()

# database environment
ENV = 'dev'

if ENV == 'dev':
    # dev database
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/eewl'
else:
    # prod database
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''

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

@app.route('/', methods = ['GET', 'POST'])
def index():
    form = ContactForm()
    return render_template('index.html', form = form)

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
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
        return render_template('confirmsubmit.html')

if __name__ == '__main__':
    app.run()

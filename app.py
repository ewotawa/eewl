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

@app.route('/', methods = ['GET', 'POST'])
def index():
    form = ContactForm()
    return render_template('index.html', form = form)

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        msg_type = request.form['msg_type']
        msg_body = request.form['msg_body']
        # print(name, email, subject, msg_type, msg_body)
        return render_template('confirmsubmit.html')

if __name__ == '__main__':
    app.run(debug = True)

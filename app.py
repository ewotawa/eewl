from flask import Flask, render_template, session, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email

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

    name = False

    form = ContactForm()

    if form.validate_on_submit():
        # collect the info ...
        session['name'] = form.name.data
        session['email'] = form.email.data
        session['subject'] = form.subject.data
        session['msg_type'] = form.msg_type.data
        session['msg_body'] = form.msg_body.data

        return redirect(url_for('confirmsubmit'))

    return render_template('index.html', form = form)

@app.route('/confirmsubmit')
def confirmsubmit():
    return render_template('confirmsubmit.html')

if __name__ == '__main__':
    app.run(debug = True)

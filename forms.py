### FORMS.PY ###
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email

# later move to a separate py file.
class ContactForm(FlaskForm):
    name = StringField(validators=[DataRequired()])
    email = StringField(validators=[Email(), DataRequired()])
    subject = StringField(validators=[DataRequired()])
    msg_type = SelectField(choices = [('commission', 'Commission a custom piece'), ('question', 'Ask a Question'), ('other', 'Other')])
    msg_body = TextAreaField(validators=[DataRequired()])
    submit = SubmitField()

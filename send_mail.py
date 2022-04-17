import smtplib
from email.mime.text import MIMEText # send text and html emails

def send_mail(name, email, subject, msg_type, msg_body):
    port = 2525
    smtp_server = 'smtp.mailtrap.io'
    login = 'bd84a3be44a214' # mailtrap username
    password = 'ec9fd70ade1553' # mailtrap password
    message = f"<h3>New Contact Form Submission</h3><ul><li>Name: {name}</li><li>E-mail address: {email}</li><li>Subject: {subject}</li><li>Message Type: {msg_type}</li><li>Message Body: {msg_body}</li></ul>"

    sender_email = 'from@example.com'
    receiver_email = 'to@example.com'

    msg = MIMEText(message, 'html')
    msg['Subject'] = 'EEWL Landing Page Form Submission'
    msg['From'] = sender_email
    msg['To'] = receiver_email

    # send e-mail
    with smtplib.SMTP(smtp_server, port) as server:
        server.login(login, password)
        server.sendmail(sender_email, receiver_email, msg.as_string())

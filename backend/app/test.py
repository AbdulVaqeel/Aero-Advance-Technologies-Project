import smtplib
from email.mime.text import MIMEText



password = "Vaqeel@123"
email = "abdulvaqeel9636@gmail.com"
app_password = "cmko rofn dmrm aase"


msg = MIMEText("""
Name: Abdul
contact:123456789
""")
msg["subject"] = "Below is my details:"
msg["from"] = email
msg["to"] = "vaqeel@vs.sa"

try:
    with smtplib.SMTPRecipientsRefused("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(email,app_password)
        server.sendmail(email, "vaqeel@vs.sa",msg.as_string())
        print("Mail send successfully")
except smtplib.SMTPAuthenticationError as e:
    print(e)


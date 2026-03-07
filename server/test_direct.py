import os
from app import send_email_background

# Simulate the same empty or bad environment variables
os.environ["EMAILJS_SERVICE_ID"] = "bad"
os.environ["EMAILJS_TEMPLATE_ID"] = "bad"
os.environ["EMAILJS_PUBLIC_KEY"] = "bad"
os.environ["EMAILJS_PRIVATE_KEY"] = "bad"

print("Running background function directly...")
send_email_background({"test": "payload"}, {"Content-Type": "application/json"})
print("Function finished.")

import requests

try:
    print("Testing API failure by pointing to non-existent endpoint or bad config...")
    res = requests.post("http://127.0.0.1:5000/api/contact", json={
        "name": "DLQ Test User",
        "email": "dlq@test.com",
        "message": "Testing the DLQ file creation."
    })
    print("API returned:", res.status_code, res.text)
except Exception as e:
    print("Error:", e)

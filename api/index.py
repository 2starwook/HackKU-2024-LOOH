from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
# 여러 클라이언트 주소를 명시
CORS(app, resources={r"/api/*": {"origins": ["http://127.0.0.1:3000", "http://localhost:3000"]}})

@app.route("/api/python")
def python_api():
    return "Some data"

if __name__ == "__main__":
    app.run(port=5328)

from backend import create_app
from flask_cors import CORS

app = create_app()

CORS(app, resources={r"/api/*": {"origins": ["http://127.0.0.1:3000", "http://localhost:3000"]}})

if __name__ == '__main__':
    app.run(port=5328)
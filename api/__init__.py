from flask import Flask
from flask_cors import CORS  # Remove in production, just allows to run and access on local device

from api.config import Config


### initializing app###
def create_app():
    """Creates the Flask app"""
    app = Flask(__name__)
    app.config.from_object(Config())
    # Temporary features for dev. environment
    CORS(app)
    from api.routes import routes_bp

    app.register_blueprint(routes_bp)

    return app

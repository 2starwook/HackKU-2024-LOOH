from flask import Blueprint


routes_bp = Blueprint('routes', __name__, url_prefix='/')


@routes_bp.route('/', methods=('GET', 'POST'))
def home():
    return "Welcome to Server"

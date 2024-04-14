from flask import Blueprint, request, Response, jsonify
from sklearn.linear_model import RidgeCV


routes_bp = Blueprint('routes', __name__, url_prefix='/')


@routes_bp.route('/', methods=('GET', 'POST'))
def home():
    return "Welcome to Server"

@routes_bp.route('/predict', methods=['GET'])
def predict():
    """
    args: 
        int bedrooms: Number of bedrooms (1 ~ 6)
        int bathrooms: Number of bathrooms (1 ~ 4)
        int stories: Number of stories (1 ~ 4)
        int mainroad: Weather connected to main road (0 / 1)
        int guestroom: Weather has a guest room (0 / 1)
        int basement: Weather has a basement (0 / 1)
        int hotwaterheating: Weather has a hotwater heater (0 / 1)
        int airconditioning: Weather has an airconditioning (0 / 1)
        int parking: Number of parkings (0 ~ 3)
    """
    global model
    model: RidgeCV
    bedrooms = request.args.get('bedrooms', type=int)
    bathrooms = request.args.get('bathrooms', type=int)
    stories = request.args.get('stories', type=int)
    mainroad = request.args.get('mainroad', type=int)
    guestroom = request.args.get('guestroom', type=int)
    basement = request.args.get('basement', type=int)
    hotwaterheating = request.args.get('hotwaterheating', type=int)
    airconditioning = request.args.get('airconditioning', type=int)
    parking = request.args.get('parking', type=int)
    predicted_price = model.predict([
        bedrooms, bathrooms, stories, mainroad, mainroad, guestroom, basement, 
        hotwaterheating, airconditioning, parking
    ])
    data = {
        'price': predicted_price
    }
    return Response(jsonify(data), mimetype="application/json")

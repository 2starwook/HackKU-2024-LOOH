from flask import Blueprint, request, Response, jsonify
from sklearn.linear_model import RidgeCV


routes_bp = Blueprint('routes', __name__, url_prefix='/')


@routes_bp.route('/', methods=('GET', 'POST'))
def home():
    return "Welcome to Server"

@routes_bp.route('/predict', methods=['GET'])
def predict():
    """
    4,2,3,yes,no,no,no,yes,2,yes,furnished
    args: 
        bedrooms: Number of bedrooms
        bathrooms: Number of bathrooms
        stories: Number of stories
        mainroad: Weather connected to main road
        guestroom: Weather has a guest room
        basement: Weather has a basement
        hotwaterheating: Weather has a hotwater heater
        airconditioning: Weather has an airconditioning
        parking: Number of parkings
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

import pickle
import numpy as np
from flask import Blueprint, request, jsonify
# from sklearn.linear_model import RidgeCV
# from api.config import App_config

model = pickle.load(open('./api/data/model','rb'))
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
    # model: RidgeCV
    try:
        bedrooms = request.args.get('bedrooms', type=int)
        bathrooms = request.args.get('bathrooms', type=int)
        stories = request.args.get('stories', type=int)
        mainroad = request.args.get('mainroad', type=int)
        guestroom = request.args.get('guestroom', type=int)
        basement = request.args.get('basement', type=int)
        hotwater = request.args.get('hotwater', type=int)
        airconditioning = request.args.get('airconditioning', type=int)
        parking = request.args.get('parking', type=int)
    except ValueError:
        # TODO - Handle ValueError and notify to client
        pass
    predicted_price = model.predict(np.reshape([
        bedrooms, bathrooms, stories, mainroad, mainroad, guestroom, basement, 
        hotwater, airconditioning, parking
    ], (-1, 10)))
    data = {
        'price': predicted_price[0]
    }
    return jsonify(data)

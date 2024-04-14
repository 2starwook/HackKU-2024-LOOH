import json
from flask.testing import FlaskClient


def test_base_route(client: FlaskClient):
    response = client.get('/')
    assert b'Welcome to Server' == response.data

def test_predict_route(client: FlaskClient):
    data = {
        'bedrooms': 1,
        'bathrooms': 1,
        'stories': 1,
        'mainroad': 1,
        'guestroom': 1,
        'basement': 1,
        'hotwaterheating': 1,
        'airconditioning': 1,
        'parking': 1
    }
    response = client.get('/predict', query_string=data)
    predicted_price = json.loads(response.data)['price']
    assert isinstance(predicted_price, float)

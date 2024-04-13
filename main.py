import pickle

from backend import create_app


app = create_app()

if __name__ == '__main__':
    with open('/backend/data/model', mode='rb+') as fd:
        model = pickle.load(fd)
    app.run(port=8000)
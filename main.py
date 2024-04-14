import pickle

from api import create_app


app = create_app()

if __name__ == '__main__':
    with open('./api/data/model', mode='rb+') as fd:
        model = pickle.load(fd)
    app.run(port=5328)
"""Test setup"""
import pytest

from api import create_app


@pytest.fixture
def client():
    app = create_app()
    with app.test_client() as client:
        yield client


@pytest.fixture
def runner():
    app = create_app()
    with app.test_cli_runner() as runner:
        yield runner

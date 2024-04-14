import secrets
from datetime import timedelta


class Config:
  # General Config
  SECRET_KEY = secrets.token_hex()
  """Secret key used for session encryption, randomly generated on each run"""

  PERMANENT_SESSION_LIFETIME = timedelta(minutes=5)
  """Session timeout of 5 minutes"""

  DEBUG = True
  """
  When debugger mode is on, interactive debugger will be shown for unhandled exceptions, 
  and the server will be reloaded when code changes
  """

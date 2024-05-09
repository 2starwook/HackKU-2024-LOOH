import os
import secrets
from datetime import timedelta
from os.path import sep


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


class App_config:
  _self = None

  PROJECT_DIR = "HackKU-2024-LOOH"
  """Name of project directory"""

  API_DIR = "api"
  """Name of backend directory"""

  DATA_DIR = "data"
  """Name of data directory"""

  LOG_DIR = "log"
  """Name of log directory"""

  LOG_FILE = "api_log"
  """Name of app log file"""

  CACHE_CONFIG_DICT = {'CACHE_TYPE': 'simple'}
  """
  Flask_Cache config
    CACHE_TYPE: Specifies which type of caching object to use
  Ref. <https://flask-caching.readthedocs.io/en/latest/#configuring-flask-caching>
  """

  def __new__(cls):
    if cls._self is None:
      cls._self = super().__new__(cls)
    return cls._self
  

  def __init__(self):
    self.PROJECT_DIR_PATH = self._get_project_dir_path()

    self.API_DIR_PATH = f"{self.PROJECT_DIR_PATH}{sep}{App_config.API_DIR}"
    """Full path of backend directory"""

    self.DATA_DIR_PATH = f"{self.API_DIR_PATH}{sep}{App_config.DATA_DIR}"
    """Full path of data directory"""

    self.LOG_DIR_PATH = f"{self.API_DIR_PATH}{sep}{App_config.LOG_DIR}"
    """Full path of data directory"""

    self.LOG_FILE_PATH = f"{self.LOG_DIR_PATH}{sep}{App_config.LOG_FILE}"
    """Full path of data directory"""
  
  def _get_project_dir_path(self):
    dir_list = os.path.abspath(__file__).split(sep)
    for i, s in reversed(list(enumerate(dir_list))):
      if App_config.PROJECT_DIR in s:
        project_dir_path = sep.join(dir_list[:i+1])
        break
    return project_dir_path

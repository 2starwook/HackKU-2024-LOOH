import logging
import os
from datetime import datetime

from api.config import App_config


class Log():
    def __init__(self, config: App_config):
        current_time = datetime.now().strftime("%Y%m%d%H%M%S")
        if not os.path.isdir(config.LOG_DIR_PATH):
            os.mkdir(config.LOG_DIR_PATH)
        logging.basicConfig(
            filename=f"{config.LOG_FILE_PATH}_{current_time}.txt", level=logging.INFO)

    def _format(self, message, code="DEFAULT"):
        return f"{code} {datetime.now()}: {message}"

    def info(self, inf_message):
        print(f"INFO: {inf_message}")
        logging.info(self._format(inf_message, code="INFO"))

    def exception(self, exception_message):
        print(f"EXCEPTION: {exception_message}")
        logging.exception(self._format(exception_message, code="EXCEPTION"))

    def warning(self, warning_message):
        print(f"WARNING: {warning_message}")
        logging.warning(self._format(warning_message, code="WARNING"))
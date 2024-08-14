# logging_middleware.py

import logging

logger = logging.getLogger(__name__)

class RequestLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Registrar detalles de la solicitud
        logger.info(f"Request path: {request.path}")
        logger.info(f"Request method: {request.method}")
        logger.info(f"Request headers: {request.headers}")
        logger.info(f"Request body: {request.body}")

        response = self.get_response(request)

        # Opcional: Registrar detalles de la respuesta
        logger.info(f"Response status code: {response.status_code}")

        return response

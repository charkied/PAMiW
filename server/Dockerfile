FROM chaberb/flask
RUN pip install -U flask
RUN pip install -U flask-cors
RUN pip install -U flask_jwt_extended
COPY ./server/app.py app/app.py
CMD ["flask", "run"]
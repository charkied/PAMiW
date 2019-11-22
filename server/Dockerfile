FROM chaberb/flask
RUN pip install -U flask-cors
COPY ./server/app.py app/app.py
CMD ["flask", "run"]
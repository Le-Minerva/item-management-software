import time
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api')
def hello_world():
    return 'Hello, from Flask!'

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == "__main__":
    app.run(debug=True)

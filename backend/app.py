from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
import sys
import webbrowser
import threading
from dotenv import load_dotenv

# 读取 .env 文件
load_dotenv()
FLASK_ENV = os.getenv("FLASK_ENV", "production") # return "production" if not found

if getattr(sys, 'frozen', False):  # exe, getattr(sys, 'frozen', False) 是 PyInstaller 官方推荐判断是否 exe 打包的方式。
    dist_path = os.path.join(sys._MEIPASS, "dist")
else:  # 开发环境
    dist_path = "../frontend/dist"

app = Flask(__name__, static_folder=dist_path, static_url_path="/")
CORS(app)  # 允许前端跨域请求

DATA_FILE = "items.json"

# 初始化 JSON 文件
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump([], f)

def load_items():
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_items(items):
    with open(DATA_FILE, "w") as f:
        json.dump(items, f, indent=4)

@app.route("/api/items", methods=["GET"])
def get_items():
    search = request.args.get("search", "")
    items = load_items()
    if search:
        items = [item for item in items if search.lower() in item["name"].lower()]
    return jsonify(items)

@app.route("/api/items", methods=["POST"])
def add_item():
    data = request.json
    items = load_items()
    item_id = max([item["id"] for item in items], default=0) + 1
    data["id"] = item_id
    items.append(data)
    save_items(items)
    return jsonify({"message": "Item added", "item": data})

@app.route("/api/items/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):
    items = load_items()
    items = [item for item in items if item["id"] != item_id]
    save_items(items)
    return jsonify({"message": "Item deleted"})

# 生产模式：服务 React build
if FLASK_ENV == "production":
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_react(path):
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, "index.html")

def open_browser():
        webbrowser.open("http://127.0.0.1:5000")

if __name__ == "__main__":  
    if FLASK_ENV == "production":
        threading.Timer(1, open_browser).start()
    debug_mode = FLASK_ENV == "development"
    app.run(debug=debug_mode)

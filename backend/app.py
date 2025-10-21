from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
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

if __name__ == "__main__":
    app.run(debug=True)

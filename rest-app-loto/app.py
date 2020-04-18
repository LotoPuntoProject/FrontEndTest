from flask import Flask, request, make_response, abort, jsonify
from user import users_list
from random import randint
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/signup', methods=['POST'])
def sign_up():
    __validate_data()
    user_data = request.json
    existing_user = next(filter(lambda db_user: db_user['username'] == user_data['username'], users_list), 0)
    if existing_user:
        abort(409)
    random_data = __get_additional_data()
    if random_data:
        user_data['id'] = random_data['login']['uuid']
        user_data['avatar'] = random_data['picture']['large']
        user_data['fullName'] = random_data['name']['first'] + ' ' + random_data['name']['last']
        user_data['cash'] = randint(1, 500)

    users_list.append(user_data)
    return jsonify({'user': user_data}), 201


@app.route('/login', methods=['POST'])
def login():
    __validate_data()
    user_data = request.json
    user = next(filter(lambda db_user: db_user['username'] == user_data['username']
                                       and db_user['password'] == user_data['password'], users_list), 0)
    if user:
        return jsonify({'user': user}), 200
    else:
        abort(404)


@app.route('/<int:user_id>/info', methods=['GET'])
def get_user_info(user_id):
    user = next(filter(lambda db_user: db_user['id'] == user_id, users_list), None)
    if user:
        return jsonify({'user': user}), 200
    else:
        abort(404)


def __validate_data():
    if not request.json:
        abort(400)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'User not found'}), 404)


@app.errorhandler(409)
def not_found(error):
    return make_response(jsonify({'error': 'User already exist'}), 409)


def __get_additional_data():
    api = 'https://randomuser.me/api?nat=us&gender=male'
    response = requests.get(api)
    results = response.json().get('results', None)
    if results and len(results) > 0:
        return results[0]


if __name__ == '__main__':
    app.run(debug=True, port=3001)

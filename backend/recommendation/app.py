from flask import Flask, request, jsonify
import joblib
import numpy as np
from pymongo import MongoClient
from bson import ObjectId
import pandas as pd

app = Flask(__name__)

# Load the recommendation model and scaler
model = joblib.load('house_recommendation_model.pkl')
scaler = joblib.load('scaler.pkl')  # Load the scaler for normalization

# MongoDB Connection (update with your MongoDB details)
client = MongoClient('mongodb+srv://22n219:SlVXSTQktVuWOFsN@homehunt.ierjb.mongodb.net/homehunt?retryWrites=true&w=majority&appName=HomeHunt')
db = client['homehunt']
properties_collection = db['properties']

def serialize_property(property_data):
    if property_data is None:
        return None
    property_data['_id'] = str(property_data['_id'])  
    return property_data
def recommend_houses(user_preferences):
    user_normalized = scaler.transform([user_preferences]) # Normalize user preferences
    distances, indices = model.kneighbors(user_normalized) # Find nearest neighbors
    # Fetch recommended properties from MongoDB using their indices
    recommended_properties = []
    for index in indices[0]:
        property_data = properties_collection.find_one({"id": int(index)}) 
        if property_data:
            recommended_properties.append(serialize_property(property_data))  
    return recommended_properties

@app.route('/recommend', methods=['POST'])
def recommend():
    user_data = request.json # Extract user input from the request
    user_input = np.array([
        user_data['price'],                       # Price of the house
        user_data['size'],                        # Size of the house
        user_data['rooms'],                       # Number of bedrooms
        user_data['bathrooms']                    # Number of bathrooms
    ])
    recommended_properties = recommend_houses(user_input) 
    response = {
        'recommended_properties': recommended_properties   # Return the properties
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)

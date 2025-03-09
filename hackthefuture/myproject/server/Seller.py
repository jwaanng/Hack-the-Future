import base64
import os
import json
import pymongo
from PIL import Image
from google import genai
from google.genai import types
from donation import generatedonation
from api import generate
MONGO_URI = "mongodb+srv://terenceyang19:HTF123123@cluster0.ntodz.mongodb.net/"
SELLER_ID = ""  
SELLER_ADDRESS = ""

client = pymongo.MongoClient(MONGO_URI)
db = client["your_database"]
sellers = db["sellers"]

def add_seller(seller_id, SELLER_ADDRESS):
    existing_seller = sellers.find_one({"seller_id": seller_id})
    
    if not existing_seller:
        seller_data = {
            "seller_id": seller_id,
            "Address": SELLER_ADDRESS,
            "orders": []
        }
        sellers.insert_one(seller_data)

def add_order(seller_id, order, address):
    existing_seller = sellers.find_one({"seller_id": seller_id})
    
    if existing_seller:
        sellers.update_one(
            {"seller_id": seller_id},
            {"$push": {"orders": order, "buyer_Address": address}}
        )


if __name__ == "__main__":
    client = pymongo.MongoClient(MONGO_URI)
    db = client["your_database_name"]
    collection = db["your_collection_name"]
    
    username = input("Enter Seller ID:")
    username = input("Enter Seller Address:")   
    add_seller(SELLER_ID, SELLER_ADDRESS)

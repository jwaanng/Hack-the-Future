import base64
import os
import json
import pymongo
from PIL import Image
from google import genai
from google.genai import types
from donation import generatedonation
from api import generate
import Seller
MONGO_URI = "mongodb+srv://terenceyang19:!Terence19@cluster0.ntodz.mongodb.net/"
SELLER_ID = "seller123"  
SELLER_ADDRESS = "125 st George St, Toronto, ON M5S 1A5"

if __name__ == "__main__":
    user_address = "125 St George St, Toronto, ON M5S 1A5"

    condition, a, b, c = generate("image1.png", "image2.png")

    if condition == "A" or condition == "B":
        print("\nPlease return to this address: "+ SELLER_ADDRESS)
        Seller.add_order(SELLER_ID, "1", SELLER_ADDRESS)
    elif condition == "C" or condition == "D":
        address = generatedonation(user_address)
        print("\nPlease return to this address: "+ address)
        Seller.add_order(SELLER_ID, "1", address)
    elif condition == "E" or condition == "F":
        print("\nItem cannot be returned")
        
        

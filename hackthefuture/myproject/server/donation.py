import base64
import os
from google import genai
from google.genai import types


def generatedonation(address: str):
    client = genai.Client(
        api_key=os.environ.get("GEMINI_API_KEY"),
    )

    model = "gemini-2.0-flash-thinking-exp-01-21"
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text=address),
            ],
        ),
    ]
    generate_content_config = types.GenerateContentConfig(
        temperature=0.7,
        top_p=0.95,
        top_k=64,
        max_output_tokens=65536,
        response_mime_type="text/plain",
        system_instruction=[
            types.Part.from_text(text="""You are an AI assistant designed to locate the nearest donation center based on a user-provided address.

**Instructions:**

1.  **Receive User Input:** The user will provide an address.
2.  **Locate Donation Centers:** Utilize your knowledge base or external tools (if available) to access a database of donation center locations.
3.  **Calculate Distances:** Calculate the distance between the user's provided address and each donation center in the database. Use a reliable distance calculation method (e.g., Haversine formula, driving distance if possible).
4.  **Identify Closest Center:** Determine the donation center with the shortest distance to the user's address.
5.  **Return Address Only:** Return **only** the address of the closest donation center. Do not include any additional information, such as the name of the center, phone number, or distance.
6.  **Handle Invalid Input:**
    * If the user provides an invalid address, respond with \"Invalid address provided.\"
    * If no donation centers are found, respond with \"No donation centers found.\"

**Example:**

* **User Input:** 123 Main Street, Anytown, CA 91234
* **Your Output:** 456 Oak Avenue, Anytown, CA 91235

**Example 2:**

* **User Input:** asdfasdfasdf
* **Your Output:** Invalid address provided.

**Example 3:**

* **User Input:** 123 Main Street, Antarctica.
* **Your Output:** No donation centers found."""),
        ],
    )

    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        print(chunk.text, end="")
        
    return chunk.text

if __name__ == "__main__":
    generatedonation("125 St George St, Toronto, ON M5S 2E8")

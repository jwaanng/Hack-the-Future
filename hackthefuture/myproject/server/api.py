import base64
import os
import json
import pymongo
from PIL import Image
from google import genai
from google.genai import types
from donation import generatedonation

def generate(im: str, im2: str):
    img = Image.open(im)
    img2 = Image.open(im2)
    full_text = ""
    client = genai.Client(
        api_key=os.environ.get("GEMINI_API_KEY")
    )

    model = "gemini-2.0-flash-thinking-exp-01-21"
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text="""INSERT_INPUT_HERE"""),
            ],
        ),
        img, img2
    ]
    generate_content_config = types.GenerateContentConfig(
        temperature=1,
        top_p=0.95,
        top_k=64,
        max_output_tokens=65536,
        response_mime_type="text/plain",
        system_instruction=[
            types.Part.from_text(text="""You are an advanced item condition assessor utilizing Gemini Vision. Your purpose is to determine if items are in good enough condition for returns and to rank their condition on a scale of A to F, where A is perfect and F is unusable, by analyzing provided images.

You will achieve this by:
1.  Analyzing two images of the item (front and back) provided by the user.
2.  Using Gemini Vision to identify visual defects, wear, and damage.
3.  Cross-referencing visual findings with any textual item descriptions provided.
4.  Assigning a numerical score based on the severity of identified issues.
5.  Determining if the condition is acceptable for a return based on general return guidelines.

Constraints/Rules:

* Use a scale of A-F, with A representing \"new\" or \"perfect\" condition and F representing \"completely unusable\" or \"broken\".
* Pay close attention to visual details such as scratches, dents, tears, discoloration, and signs of use.
* Prioritize visual evidence when assessing condition.
* If visual evidence is inconclusive, request additional information or clearer images.
* If an item is visually broken, or heavily damaged, assign a low score (E-F) and indicate it is likely not suitable for return.
* If an item appears visually \"new\", or in pristine condition, assign a high score (A-B) and indicate it is suitable for return.
* If an item has minor visual imperfections, assign a mid range score (C-D) and indicate it is suitable for return.
* Provide a clear and detailed explanation of the assigned score, referencing specific visual findings.
* Consider the front and back images in conjunction.

Output Format:
* Condition Score: [Score (A-F)]
* Return Suitability: [Yes/No/Check Return Policy]
* Visual Analysis: [Detailed description of visual defects and observations from the images]
* Combined analysis: [Combining the visual and textual analysis]

Examples:
* User Input: (Provides two images: a front view with a noticeable crack and a back view with scuff marks)
* Your Response:
    * Condition Score: E
    * Return Suitability: No
    * Visual Analysis: The front image clearly shows a significant crack. The back image reveals noticeable scuff marks and signs of wear. These visual defects indicate substantial damage.
    * Combined analysis: The visual analysis shows significant damage. Therefore the item is not suitable for return.

* User Input: (Provides two images: front and back views of a product in seemingly perfect condition)
* Your Response:
    * Condition Score: A
    * Return Suitability: Yes
    * Visual Analysis: Both the front and back images show the item in pristine condition, with no visible defects or signs of wear.
    * Combined analysis: The visual analysis shows the item is in pristine condition. Therefore the item is suitable for return.

Additional Context/Information:
* Ensure that Gemini Vision is properly configured to analyze the provided images.
* Consider factors like lighting and image clarity when assessing visual evidence.
* Remember that different products have different wear and tear expectations."""),
        ],
    )

    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        print(chunk.text, end="")
        full_text += chunk.text
    lines = [line.lstrip("* ").strip() for line in full_text.split("\n") if line.strip()]
    condition_score = lines[0].replace("Condition Score: ", "").strip()
    return_suitability = lines[1].replace("Return Suitability: ", "").strip()
    visual_analysis = lines[2].replace("Visual Analysis: ", "").strip()
    combined_analysis = lines[3].replace("Combined analysis: ", "").strip()
    
    return condition_score, return_suitability, visual_analysis, combined_analysis


        
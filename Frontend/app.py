import requests

text="Chandrayaan-3 (transl. Moon-craft, pronunciation (help·info))[7] is the third Indian lunar exploration mission under the Indian Space Research Organisation's (ISRO) Chandrayaan programme.[7] It consists of a lander named Vikram and a rover named Pragyan, similar to those of the Chandrayaan-2 mission. The propulsion module carried the lander and rover configuration to lunar orbit in preparation for a powered descent by the lander.[8][9]"

def get_summary(text):
    openai_api_key = "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"
    URL = "https://api.openai.com/v1/chat/completions"
    payload = {"model": "gpt-3.5-turbo", "temperature" : 1.0, "messages" : [{"role": "user", "content": f"Summarize the following text give answer in maximum 50 words: {text}"}]}
    headers = {"Content-Type": "application/json","Authorization": f"Bearer {openai_api_key}"}
    response = requests.post(URL, json=payload, headers=headers)
    response_data = response.json()
    print (response_data['choices'][0]['message']['content'])

get_summary(text)

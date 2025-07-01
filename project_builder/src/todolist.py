import openai
openai.api_key = ""

def response(prompt):
    prompt = prompt + "This is my project idea. Give me a bulleted list of the steps I should take as a coder to build this"
    response = openai.ChatCompletion.create(
        model = "gpt-3.5-turbo",
        messages = ["role":user, "content":prompt]
    )

    return response.choices[0].message.content.strip()

if __name__ == "__main__" :
    inp = input("Enter your prompt here")
    while (['quit', 'exit', 'bye'] not in inp.lower()):
        print(response(inp))
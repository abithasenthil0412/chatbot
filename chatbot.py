def get_response(message):

    message = message.lower()

    if "hello" in message or "hi" in message:
        return "👋 Hello! Nice to meet you."

    elif "how are you" in message:
        return "😊 I'm doing great! Thanks for asking."

    elif "your name" in message:
        return "🤖 I'm a chatbot built using Flask."

    elif "bye" in message:
        return "👋 Goodbye! Have a nice day."

    else:
        return "😄 Sorry, I don't understand that yet."
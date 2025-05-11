exports.handler = async (event) => {
    const { prompt } = JSON.parse(event.body);
    const fakeAnswer = "Questa è una risposta simulata. (Integra qui la tua logica con OpenAI)";
    return {
        statusCode: 200,
        body: JSON.stringify({ response: fakeAnswer })
    };
};

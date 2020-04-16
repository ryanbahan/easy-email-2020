export const parseTones = tones => {
  const documentTones = tones.document_tone.tones;
  return documentTones;
}

export const requestTones = async (content) => {
  const data = {toneInput: {text: content}}

  const res = await fetch("http://localhost:3000/api/tone", {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  const toneResponse = await res.json();
  const tones = parseTones(toneResponse);
  return tones;
}

'use client'

import { useState } from "react";

function useForm({ additionalData }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const finalFormEndpoint = e.target.action;
    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

    console.log(JSON.stringify(data))
    fetch(finalFormEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({fields: data }),
    })
      .then((response) => {
        console.log(response)
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("🎉Look out for some goodies in your inbox!");
        setStatus('✅success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('❌error');
      });
  };

  return { handleSubmit, status, message };
}

export default useForm;
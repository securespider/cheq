'use client'

import React, { useState, useEffect } from 'react'
export default function standard() {
  const handleClick = async () => {
    try {
      const response = await fetch('https://api.awanllm.com/v1/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer b489c233-3af5-4ccd-9980-5c904d8d51b7`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'Meta-Llama-3-8B-Instruct',
          prompt: 'What is the meaning of life?',
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      console.log(data) // Do something with the response data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
    console.log(data)
  }

  return (
    // Button with onclick function
    <button onClick={handleClick}>Click me</button>
  )
}

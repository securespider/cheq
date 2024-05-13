import * as React from 'react'
import { 
  type BaseError, 
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi'
import { abi } from '@/abi'

export function MintNFT() {
  const { 
    data: hash,
    error, 
    isPending, 
    writeContract 
  } = useWriteContract() 

  const [writeResponse, setWriteResponse] = React.useState<string>("")

  const handleClick = async (serial) => {
    var item = "car"
    if (serial.startsWith("1")) {
        item = "tv"
    } else if (serial.startsWith("2")) {
        item = "ball"
    } else if (serial.startsWith("3")) {
        item = "book"
    }
    const prompt = "Give a one line answer to 'How to maintain a " + item + "'"
    try {
      const response = await fetch('https://api.awanllm.com/v1/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer b489c233-3af5-4ccd-9980-5c904d8d51b7`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'Meta-Llama-3-8B-Instruct',
          prompt: prompt,
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      var answer = data.choices[0].text
      answer = answer.split("\n")
      var count = 0
      var reply = "Tips: "
      for (var i = 0; i < answer.length; i++) {
        if (answer[i].length >= 2) {
          reply += answer[i] + "\n"
          count += 1
          if (count >= 2) {
            break
          }
          break
        }
      }
      return reply.trim().replace("Answer:", "")
    } catch (error) {
      return String(error)
    }
    console.log("API works")
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const barcode = formData.get('value') as string 
    console.log(barcode)
    writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
      args: [BigInt(barcode)],
    })
    setWriteResponse(handleClick(barcode))

  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 
  
  return (
    <form onSubmit={submit}>
      <div>
      <div> Address: </div>
      <input name="address" placeholder="0xA0Cf…251e" required />
      </div>
      <div>
      <div> Item Serial No. </div>
      <input name="value" placeholder="00" required />
      </div>
      <button 
        disabled={isPending} 
        type="submit"
        className='btn btn-sm btn-info'
      >
        {isPending ? 'Confirming...' : 'Mint'} 
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed.</div>} 
      {error && ( 
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
      )} 
      <div>{writeResponse}</div>
    </form>
  )
}

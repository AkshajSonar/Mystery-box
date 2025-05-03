// // App.jsx
// import React from 'react'
// import { useConnect, useDisconnect, useAccount, useBalance } from 'wagmi'
// import { injected } from 'wagmi/connectors'
// import MysteryBox from './components/MysteryBox'

// export default function App() {
//   const { connectAsync } = useConnect({ connector: injected() })
//   const { disconnect } = useDisconnect()
//   const { address, isConnected } = useAccount()
//   const { data: balance } = useBalance({ address })

//   const handleConnect = async () => {
//     try {
//       await connectAsync()
//     } catch (err) {
//       console.error('Wallet connect failed:', err)
//     }
//   }
  

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Mystery Box NFT</h1>

//       {!isConnected ? (
//         <button onClick={() => handleConnect()}>Connect Wallet</button>
//       ) : (
//         <>
//           <p>Connected as: <strong>{address}</strong></p>
//           <p>Balance: {balance?.formatted} {balance?.symbol}</p>
//           <button onClick={() => disconnect()}>Disconnect</button>
//         </>
//       )}

//       <MysteryBox/>
//     </div>
//   )
// }

import React from 'react'
import { useConnect, useDisconnect, useAccount, useBalance } from 'wagmi'
import { injected } from 'wagmi/connectors'
import MysteryBox from './components/MysteryBox'

export default function App() {
  const { connectAsync } = useConnect()
  const { disconnect } = useDisconnect()
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({ address })

  const handleConnect = async () => {
    try {
      await connectAsync({
        connector: injected(),  // ✅ Use it like this
      })
    } catch (err) {
      console.error('Wallet connect failed:', err)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mystery Box NFT</h1>

      {!isConnected ? (
        <button onClick={handleConnect}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected as: <strong>{address}</strong></p>
          <p>Balance: {balance?.formatted} {balance?.symbol}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      )}

      <MysteryBox />
    </div>
  )
}

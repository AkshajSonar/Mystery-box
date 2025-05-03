import React, {useState} from 'react';
import {abi} from '../contract_data/abi';
import {useWriteContract} from 'wagmi';

const CONTRACT_ADDRESS = "0xBf959c0DC5150E4A83D3CD420b2802A94de8dF0A";

const MysteryBox = () => {
    const [status, setStatus] = useState('');
    const {writeContractAsync} = useWriteContract();

    const handleMint = async () => {
        const index = Math.floor(Math.random() * 4);
        setStatus('Minting...');

        try{
            await writeContractAsync({
                address: CONTRACT_ADDRESS,
                abi: abi,
                functionName: 'createNFT',
                args: [index],
            })
            setStatus('NFT Minted Successfully!')
        }
        catch(error){
            console.error(error)
            setStatus('Minting Failed')
        }
    }
    
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>🎁 Mystery Box NFT</h1>
          <button
            onClick={handleMint}
            style={{
              padding: '12px 24px',
              fontSize: '18px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Mint Mystery NFT
          </button>
          <p>{status}</p>
        </div>
      )
}

export default MysteryBox

import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/context'

    
const Main = () => {
        const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult
            ?<>
               <div className="greet">
                <p><span>Hello, Appu</span></p>
                <p>how can i help u today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Sugget beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                   <div className="card">
                    <p>Can u explain why valorant is such toxic game</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                   <div className="card">
                    <p>Can u explain why rahul couldnt find a soulmate?</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                   <div className="card">
                    <p>why doesnt shazz accept that he is a gay?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            : <div className='result' > 
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }   
                </div>
            </div>
        }

         
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask a question' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may not display inaccurate info, including about people, so double check beofre you ask
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main

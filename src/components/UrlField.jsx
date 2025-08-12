import { BeatLoader } from "react-spinners";
import { useState, useReducer } from "react"



const initialState = {
  text: '',
  urls: [],
  isLoading: false,
  err: false, 
}

const reducer = (state, action) => {
  console.log(action.payload)

  switch(action.type) {

    case 'add':
      return {
        ...state,
        urls: [...state.urls, action.payload]
      } 
    case 'copy': 
      return {
        ...state, 
        urls: state.urls.map(ele => {
          if(ele.shorten === action.payload.shorten) {
            return {...ele, copied: true}
          } else {
            return ele
          }          
        })
      }
    case 'default': 
      return {
        ...state
      }
  }
}


function UrlField() {



  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [inputErr, setInputErr] = useState(false)
  

  const [state, dispatch] = useReducer(reducer, initialState)

  
  async function callApi(longURL) {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:4000/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: longURL })
      });

      const data = await response.json();
      if(data.result_url === undefined) return
      
      dispatch({type: 'add', payload: {url: longURL, shorten: data.result_url, copied: false}})
      setText('')
      setIsLoading(false)
      console.log(data)
    } catch(err) {
      console.log(err)
      setInputErr(false)
      setIsLoading(false)
    }
  }




  function shortUrl(e) {
    e.preventDefault()
    let checkURL = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if(!checkURL.test(text)) {
      setInputErr(true)
      return
    }
    callApi(text)
  }


  function handleInput(e) {
    setInputErr(false)
    setText(e.target.value)
  }


  async function copyClip(ele) {
    try {
      await navigator.clipboard.writeText(ele.shorten);
      dispatch({type: 'copy', payload: ele})
    } catch (err) {
      console.log(err.message)
    }
  } 

  console.log(state.urls)

  return (
    <div className='url'>
      <form className="url__submit" onSubmit={shortUrl}>
        <div className="url__submit--inp">
          <input 
            type="text" 
            placeholder='Shorten a link here...' 
            value={text} 
            onChange={handleInput}
            className={`${inputErr ? 'error': ''}`}
          />
          <p className={`${inputErr ? '' : 'hidden'}`}>Enter a valid url</p>
        </div>
        <button className='btn linkbtn'>{isLoading ? <BeatLoader size={10} /> : 'Shorten it!'}</button>
      </form>
      <ul className="url__list">
        {
          state.urls.map((ele, idx) => {
            return (
              <li className='url__list--ele' key={idx}>
                <div className="url__list--ele__url">
                  <p>{ele.url}</p>
                </div>
                <div className="url__list--ele__newUrl">
                  <p>{ele.shorten}</p>
                  <button 
                    className={`btn linkbtn ${ele.copied ? 'selected': ''}`}
                    onClick={() => copyClip(ele)}
                  >
                    {ele.copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UrlField

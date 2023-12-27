import {CgSpinner} from 'react-icons/cg'

function SendButton({title, loading}) {
  return (
    loading ?
    <div className='loader'><CgSpinner className='spin'/></div>:
    <button className='button '>{title}</button>
  )
}

export default SendButton
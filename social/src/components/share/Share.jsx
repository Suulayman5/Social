import './Share.css'
import {PremMedia} from "@mui/icons-material";
export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img src="/assets/person/16616.jpg" 
           className="shareProfileImg" />
           <input placeholder="What's in your mind" className='shareInput'/>
        </div>
        <hr className ="shareHr"></hr>
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              {/* <PremMedia className='shareIcon/> */}
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

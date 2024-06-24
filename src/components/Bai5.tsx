import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../interfaces/State'
import { changeArrow } from '../store/reducers/Arrowreducer';

export default function Bai5() {
    const arrowState=useSelector((state:State)=>state.arrow);
    const dispatch=useDispatch();
  return (
    <div className='b5' style={{maxWidth:arrowState.width}}>
      <div className='b5-item'>
      <i className="fa-solid fa-clock"></i>
       <div style={{display:arrowState.display}}>Bảng điều khiển</div>
      </div>
      <div className='b5-item'>
      <i className="fa-solid fa-user"></i>
       <div style={{display:arrowState.display}}>Tài khoản</div>
      </div>
      <div className='b5-item'>
      <i className="fa-solid fa-dollar-sign"></i>
       <div style={{display:arrowState.display}}>Tài sản</div>
      </div>
      <div className='b5-item'>
      <i className="fa-solid fa-file"></i>
       <div style={{display:arrowState.display}}>Tài liệu</div>
      </div>
      <div className='b5-item'>
      <i onClick={()=>dispatch(changeArrow())} className={arrowState.display=='none'?'fa-solid fa-chevron-right':'fa-solid fa-chevron-left'}></i>
       <div style={{display:arrowState.display}}>Thu gọn</div>
      </div>
    </div>
  )
}

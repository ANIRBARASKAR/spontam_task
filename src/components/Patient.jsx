import React from 'react'
import { avatar } from '../assets/img'
import "./../assets/css/cards.css"

const Patient = () => {
  return <>
  <div className="main-patient  small">
<div>

  <div className='photo'>
  <img src={avatar} width={65}  alt="" />
  </div>
  <h6 className='text-center mt-1'>Patient Name</h6>

<div className='d-flex justify-content-center gap-4 mt-2 '>
  <div>
    <span className='bold'>Mr No:  </span><span>12345</span>
</div>
  <div><span className='bold'>Mr No:  </span><span>12345</span>
</div>
</div>
<div className='mt-2'><span className='bold'>Gender : </span><span>Male</span>
</div>
<div><span className='bold'>Gender : </span><span>Male</span>
</div>
<div><span className='bold'>Gend : </span><span>Lorem, ipsum dolor.</span>
</div>
<div><span className='bold'>Genderbh : </span><span>7858675768/</span>
</div>


<p className='mt-3 bold '>Last Consultation</p>
<p>!6:00 - 16:10 PM,22,Dec,2022</p>
<p className='mt-3 bold'>Last Consultation</p>
<p>!6:00 - 16:10 PM,22,Dec,2022</p>
</div>
  </div>
  </>
}

export default Patient
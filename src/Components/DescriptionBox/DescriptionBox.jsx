import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {

  return (
    <div className='descriptionbox' >
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio perferendis doloremque accusamus totam eaque, exercitationem deserunt magni quas itaque sequi asperiores cumque vitae commodi cum vel nihil omnis sunt! Ad?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam pariatur at architecto. Fugiat quas enim sint a commodi neque repudiandae.</p>

        </div>
    </div>
  )
}

export default DescriptionBox